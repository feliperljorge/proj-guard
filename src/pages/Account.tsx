/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AccountItem } from "../components/Accounts";
import { defaultInstitutions, Institution } from "../data/accounts";
import InstitutionIcon from "../components/shared/InstitutionIcon";
import { Colors, Gradients } from "../constants/constants";
import Transactions from "../components/Transactions";
import { defaultTransactions } from "../data/transactions";
import Connections from "../components/Connections";
import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";

function AccountPage(): React.JSX.Element {
  const { accountId: institutionId } = useParams<{ accountId?: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [institution, setInstitution] = useState<Institution | null>(null);

  useEffect(() => {
    if (institutionId) {
      setLoading(true);
      // TODO: Make API call to fetch specific institution details
      // Example: fetchInstitutionDetails(institutionId).then(...)
      console.log("Loading institution details for ID:", institutionId);

      // Simulate API call delay
      setTimeout(() => {
        // For now, we'll simulate finding institution details from our mock data
        const foundInstitution = findInstitutionById(institutionId);
        setInstitution(foundInstitution);
        setLoading(false);
      }, 1000);
    }
  }, [institutionId]);

  const findInstitutionById = (id: string) => {
    // This is a mock implementation - in real app, this would be an API call
    return (
      defaultInstitutions.find((institution) => institution.id === id) || null
    );
  };

  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(absBalance);
    return isNegative ? `-${formatted}` : formatted;
  };

  const calculateTotalBalance = (accounts: any[]) => {
    return accounts.reduce((total, account) => total + account.balance, 0);
  };

  if (!institution && loading) {
    return (
      <div
        css={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
        <h1
          css={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "white",
          }}
        >
          Institution Details
        </h1>
        <div
          css={{
            textAlign: "center",
            padding: "32px 0",
          }}
        >
          <div
            css={{
              animation: "spin 1s linear infinite",
              borderRadius: "50%",
              height: "32px",
              width: "32px",
              borderBottom: "2px solid white",
              margin: "0 auto",
            }}
          />
          <p
            css={{
              marginTop: "8px",
              color: "rgba(156, 163, 175, 1)",
            }}
          >
            Loading institution details...
          </p>
        </div>
      </div>
    );
  }

  if (institution && !loading) {
    const totalBalance = calculateTotalBalance(institution.accounts);

    return (
      <div
        css={{
          padding: "16px",
          paddingBottom: "48px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "32px",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            css={{
              height: "32px",
              width: "32px",
              borderRadius: "50%",
              border: `1px solid ${Colors.white50}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: Colors.white,
              },
            }}
          >
            <ChevronIcon
              css={{
                width: "16px",
                height: "16px",
                transform: "rotate(180deg)",
                marginLeft: "-9px",
                marginTop: "-3px",
              }}
            />
          </button>
          <p css={{ fontSize: "14px", color: Colors.white, fontWeight: 500 }}>
            Account details
          </p>
          {/* Spacer */}
          <div css={{ height: "32px", width: "32px" }} />
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-start",
            marginBottom: "24px",
          }}
        >
          <div css={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <InstitutionIcon institution={institution} />
            <p
              css={{
                margin: 0,
                fontSize: "16px",
                color: Colors.white,
              }}
            >
              {institution.institutionName}
            </p>
          </div>
          <h1
            css={{
              margin: 0,
              background: Gradients.headlineGradientMinted,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "32px",
              fontWeight: "semibold",
              display: "block",
              width: "fit-content",
            }}
          >
            {formatBalance(totalBalance)}
          </h1>
          <p css={{ fontSize: "14px", color: Colors.white50, margin: 0 }}>
            Total balance • {institution.accounts.length} account
            {institution.accounts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div css={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <AccountItem institution={institution} showHeader={false} />
          <Connections />
          <Transactions
            title="Transactions"
            transactions={defaultTransactions}
          />
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div
      css={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px 16px",
      }}
    >
      <h1
        css={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "24px",
          color: "white",
        }}
      >
        Institution Not Found
      </h1>
      <div
        css={{
          textAlign: "center",
          padding: "32px 0",
        }}
      >
        <p
          css={{
            color: "rgba(156, 163, 175, 1)",
          }}
        >
          The institution with ID "{institutionId}" was not found.
        </p>
      </div>
    </div>
  );
}

export default AccountPage;
