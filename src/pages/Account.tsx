/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accounts, { AccountItem } from "../components/Accounts";
import { defaultInstitutions, Institution } from "../data/accounts";
import InstitutionIcon from "../components/shared/InstitutionIcon";
import { Colors, Gradients } from "../constants/constants";
import Transactions from "../components/Transactions";
import { defaultTransactions } from "../data/transactions";
import Connections from "../components/Connections";

function AccountPage(): React.JSX.Element {
  const { accountId: institutionId } = useParams<{ accountId?: string }>();
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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
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
            <p css={{ margin: 0 }}>{institution.institutionName}</p>
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
          <p css={{ color: Colors.white50, margin: 0 }}>
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
