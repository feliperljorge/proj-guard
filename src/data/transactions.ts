export interface Transaction {
  id: string;
  vendor: string;
  date: string;
  value: number;
  category:
    | "food"
    | "electronics"
    | "retail"
    | "transportation"
    | "entertainment"
    | "utilities"
    | "healthcare"
    | "other";
}

export const defaultTransactions: Transaction[] = [
  {
    id: "trans-1",
    vendor: "Target",
    date: "2024-01-15",
    value: 45.67,
    category: "retail",
  },
  {
    id: "trans-2",
    vendor: "Doordash",
    date: "2024-01-14",
    value: 28.5,
    category: "food",
  },
  {
    id: "trans-3",
    vendor: "Best Buy",
    date: "2024-01-13",
    value: 299.99,
    category: "electronics",
  },
  {
    id: "trans-4",
    vendor: "Uber",
    date: "2024-01-12",
    value: 18.75,
    category: "transportation",
  },
  {
    id: "trans-5",
    vendor: "Netflix",
    date: "2024-01-11",
    value: 15.99,
    category: "entertainment",
  },
];
