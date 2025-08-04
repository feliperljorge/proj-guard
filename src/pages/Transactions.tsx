import React from "react";
import Transactions from "../components/Transactions";

function TransactionsPage(): React.JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <Transactions />
    </div>
  );
}

export default TransactionsPage;
