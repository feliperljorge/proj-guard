/** @jsxImportSource @emotion/react */
import React from "react";
import Section from "./shared/Section";
import Container from "./shared/Container";
import ViewAllButton from "./shared/ViewAllButton";
import { Transaction, defaultTransactions } from "../data/transactions";

import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";

import { Colors } from "../constants/constants";

const TransactionItem: React.FC<{ transaction: Transaction }> = ({
  transaction,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const formatValue = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        gap: "12px",
      }}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ShieldIcon />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div css={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
            {transaction.vendor}
          </div>
          <div
            css={{
              color: Colors.white50,
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {formatDate(transaction.date)}
          </div>
        </div>
      </div>
      <div css={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <div
          css={{
            color: Colors.white50,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {formatValue(transaction.value)}
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            width: "24px",
          }}
        >
          <ChevronIcon />
        </div>
      </div>
    </div>
  );
};

export const TransactionsContainer: React.FC<{
  transactions: Transaction[];
}> = ({ transactions }) => {
  return (
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          "& > div:not(:last-child)": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          },
        }}
      >
        {transactions.map((transaction, _index) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Container>
  );
};

interface TransactionsProps {
  title?: string;
  transactions?: Transaction[];
  institutionId?: string;
}

const Transactions: React.FC<TransactionsProps> = ({
  title = "Recent transactions",
  transactions = [],
  institutionId,
}) => {
  const displayTransactions =
    transactions.length > 0 ? transactions : defaultTransactions;

  const latestTransactions = displayTransactions.slice(0, 5);
  const hasMoreTransactions = displayTransactions.length > 5;

  return (
    <Section
      title={title}
      headerItems={
        hasMoreTransactions
          ? [
              <ViewAllButton
                to={
                  institutionId
                    ? `/transactions/${institutionId}`
                    : "/transactions"
                }
              />,
            ]
          : []
      }
    >
      <TransactionsContainer transactions={latestTransactions} />
    </Section>
  );
};

export default Transactions;
