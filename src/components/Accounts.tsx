/** @jsxImportSource @emotion/react */
import React from "react";
import Section from "./shared/Section";
import Container from "./shared/Container";
import { Institution, defaultInstitutions } from "../data/accounts";

import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";

const AccountItem: React.FC<{ institution: Institution }> = ({
  institution,
}) => {
  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(absBalance);

    return isNegative ? `-${formatted}` : formatted;
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
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 16px",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div
            css={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={institution.icon}
              alt={institution.institutionName}
              css={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
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

  return (
    <Section title="Accounts">
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
