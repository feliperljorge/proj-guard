import { connections, Connection } from "./connections";

export interface AccountDetails {
  type: "checking" | "savings" | "credit" | "personal";
  accountNumber: string;
  lastFour: string;
  balance: number;
}

export interface Institution {
  id: string;
  institutionName: string;
  icon: string; // URL to institution icon
  accounts: AccountDetails[];
  color?: string;
  connections: Connection[];
}

export const defaultInstitutions: Institution[] = [
  {
    id: "1",
    institutionName: "Chase Bank",
    icon: "https://logo.clearbit.com/chase.com",
    color: "#26569c",
    connections: [connections[0], connections[1], connections[3]], // Venmo, Robinhood, PayPal
    accounts: [
      {
        type: "checking",
        accountNumber: "1234567890",
        lastFour: "7890",
        balance: 2547.89,
      },
      {
        type: "savings",
        accountNumber: "0987654321",
        lastFour: "4321",
        balance: 12500.0,
      },
    ],
  },
  {
    id: "2",
    institutionName: "Chime",
    icon: "https://logo.clearbit.com/chime.com",
    color: "#5ec37e",
    connections: [connections[0], connections[4], connections[5]], // Venmo, Cash App, Coinbase
    accounts: [
      {
        type: "checking",
        accountNumber: "1111222233334444",
        lastFour: "4444",
        balance: 892.34,
      },
      {
        type: "savings",
        accountNumber: "5555666677778888",
        lastFour: "8888",
        balance: 3200.5,
      },
    ],
  },
  {
    id: "3",
    institutionName: "SoFi",
    icon: "https://logo.clearbit.com/sofi.com",
    color: "#48a0c3",
    connections: [connections[1], connections[3], connections[6]], // Robinhood, PayPal, Stripe
    accounts: [
      {
        type: "checking",
        accountNumber: "9999888877776666",
        lastFour: "6666",
        balance: 1875.25,
      },
    ],
  },
];
