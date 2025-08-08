/** @jsxImportSource @emotion/react */

import React from "react";
import { useParams } from "react-router-dom";

import { PageHeader } from "../components/shared/PageHeader";
import { TransactionsContainer } from "../components/Transactions";

import { defaultTransactions } from "../data/transactions";
import { defaultInstitutions } from "../data/accounts";

function TransactionsPage(): React.JSX.Element {
  const { accountId } = useParams<{ accountId?: string }>();

  const transactions = accountId
    ? defaultTransactions.filter(
        (transaction) => transaction.institutionId === accountId
      )
    : defaultTransactions;

  const institution = accountId
    ? defaultInstitutions.find((inst) => inst.id === accountId)
    : null;

  const pageTitle = institution
    ? `Transactions - ${institution.institutionName}`
    : "Transactions";

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
      <PageHeader title={pageTitle} />

      <TransactionsContainer transactions={transactions} />
    </div>
  );
}

export default TransactionsPage;
