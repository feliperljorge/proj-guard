/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AccountItem } from "../components/Accounts";
import { defaultInstitutions, Institution } from "../data/accounts";
import InstitutionIcon from "../components/shared/InstitutionIcon";
import { Colors, Gradients } from "../constants/constants";
import Transactions from "../components/Transactions";
import { defaultTransactions, Transaction } from "../data/transactions";
import Connections from "../components/Connections";
import { PageHeader } from "../components/shared/PageHeader";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import SecurityAlerts from "../components/SecurityAlerts";
import { SecurityAlert, defaultSecurityAlerts } from "../data/securityAlerts";

function AccountPage(): React.JSX.Element {
  const { accountId: institutionId } = useParams<{ accountId?: string }>();
  const [loading, setLoading] = useState(false);
  const [institution, setInstitution] = useState<Institution | null>(null);
  const [securityAlerts, setSecurityAlerts] = useState<SecurityAlert[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (institutionId) {
      setLoading(true);

      // Simulate API call delay with randomized loading time
      // finding institution from mock data
      const randomDelay = Math.random() * 1000;
      setTimeout(() => {
        const foundInstitution = findInstitutionById(institutionId);
        setInstitution(foundInstitution);

        // Filter security alerts for this specific institution
        if (foundInstitution) {
          const institutionAlerts = defaultSecurityAlerts.filter((alert) =>
            alert.institutions?.some((inst) => inst.id === institutionId)
          );
          setSecurityAlerts(institutionAlerts);

          // Filter transactions for this specific institution
          const institutionTransactions = defaultTransactions.filter(
            (transaction) => transaction.institutionId === institutionId
          );
          setTransactions(institutionTransactions);
        }

        setLoading(false);
      }, randomDelay);
    }
  }, [institutionId]);

  const findInstitutionById = (id: string) => {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoadingSpinner />
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
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <PageHeader title="Account details" />
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
          <SecurityAlerts
            alerts={securityAlerts}
            institutionId={institutionId}
          />
          <Connections institution={institution} />
          <Transactions
            title="Transactions"
            transactions={transactions}
            institutionId={institutionId}
          />

          <button
            css={{
              height: "56px",
              borderRadius: "100px",
              color: Colors.white,
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid rgba(255, 255, 255, 0.20)",
              backgroundColor: Colors.backgroundBlue,
              // backdropFilter: "blur(30px)",
              boxShadow: "0px 6px 12px 0px rgba(85, 85, 85, 0.12)",
              cursor: "pointer",
            }}
          >
            Remove account
          </button>
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
