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
  institutionId: string;
}

export const defaultTransactions: Transaction[] = [
  {
    id: "trans-1",
    vendor: "Target",
    date: "2024-01-15",
    value: 45.67,
    category: "retail",
    institutionId: "1",
  },
  {
    id: "trans-2",
    vendor: "Doordash",
    date: "2024-01-14",
    value: 28.5,
    category: "food",
    institutionId: "2",
  },
  {
    id: "trans-3",
    vendor: "Best Buy",
    date: "2024-01-13",
    value: 299.99,
    category: "electronics",
    institutionId: "1",
  },
  {
    id: "trans-4",
    vendor: "Uber",
    date: "2024-01-12",
    value: 18.75,
    category: "transportation",
    institutionId: "3",
  },
  {
    id: "trans-5",
    vendor: "Netflix",
    date: "2024-01-11",
    value: 15.99,
    category: "entertainment",
    institutionId: "2",
  },
  {
    id: "trans-6",
    vendor: "Starbucks",
    date: "2024-01-10",
    value: 8.45,
    category: "food",
    institutionId: "1",
  },
  {
    id: "trans-7",
    vendor: "Home Depot",
    date: "2024-01-09",
    value: 127.33,
    category: "retail",
    institutionId: "3",
  },
  {
    id: "trans-8",
    vendor: "CVS Pharmacy",
    date: "2024-01-08",
    value: 23.5,
    category: "healthcare",
    institutionId: "2",
  },
];
