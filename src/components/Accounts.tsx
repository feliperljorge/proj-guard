/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";
import Section, { SectionHeaderButton } from "./shared/Section";
import Container from "./shared/Container";
import InstitutionIcon from "./shared/InstitutionIcon";
import { Institution, defaultInstitutions } from "../data/accounts";

import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";

export const AccountItem: React.FC<{
  institution: Institution;
  showHeader?: boolean;
}> = ({ institution, showHeader = true }) => {
  const navigate = useNavigate();

  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(absBalance);

    return isNegative ? `-${formatted}` : formatted;
  };

  const handleInstitutionClick = () => {
    // Navigate to this institution
    if (institution.accounts.length > 0) {
      navigate(`/accounts/${institution.id}`);
    }
  };

  return (
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Institution Header */}
        {showHeader && (
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 16px",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
            onClick={handleInstitutionClick}
          >
            <InstitutionIcon institution={institution} />
            <h3
              css={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "600",
                color: "white",
                lineHeight: "1.2",
              }}
            >
              {institution.institutionName}
            </h3>

            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "24px",
                width: "24px",
                marginLeft: "auto",
              }}
            >
              <ChevronIcon />
            </div>
          </div>
        )}

        {/* Accounts List */}
        <div
          css={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {institution.accounts.map((account, index) => (
            <div
              key={index}
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                borderBottom:
                  index < institution.accounts.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.07)"
                    : "none",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginLeft: "2px",
                }}
              >
                <ShieldIcon />
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.5)",
                    lineHeight: "1.2",
                  }}
                >
                  <span>
                    {account.type.charAt(0).toUpperCase() +
                      account.type.slice(1)}
                  </span>
                  <span
                    css={{
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    •
                  </span>
                  <span>{account.lastFour}</span>
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "2px",
                }}
              >
                <span
                  css={{
                    lineHeight: "1.2",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {formatBalance(account.balance)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

interface AccountsProps {
  institutions?: Institution[];
}

const Accounts: React.FC<AccountsProps> = ({ institutions = [] }) => {
  const displayInstitutions =
    institutions.length > 0 ? institutions : defaultInstitutions;

  // Calculate total balance across all institutions
  const calculateTotalBalance = () => {
    return displayInstitutions.reduce((total, institution) => {
      return (
        total +
        institution.accounts.reduce((institutionTotal, account) => {
          return institutionTotal + account.balance;
        }, 0)
      );
    }, 0);
  };

  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);

    // Convert to K format
    const inThousands = absBalance / 1000;
    const formatted = inThousands.toFixed(2).replace(/\.?0+$/, ""); // Remove trailing zeros
    const displayValue = formatted.endsWith(".")
      ? formatted.slice(0, -1)
      : formatted;

    return isNegative ? `-${displayValue}K` : `${displayValue}K`;
  };

  const totalBalance = calculateTotalBalance();

  return (
    <Section
      title="Accounts"
      headerItems={[
        <SectionHeaderButton>
          {formatBalance(totalBalance)}
        </SectionHeaderButton>,
        <SectionHeaderButton
          onClick={() => {
            console.log("Add account tapped");
          }}
        >
          Add
        </SectionHeaderButton>,
      ]}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {displayInstitutions.map((institution) => (
          <AccountItem key={institution.id} institution={institution} />
        ))}
      </div>
    </Section>
  );
};

export default Accounts;
