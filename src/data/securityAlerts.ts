import { Institution } from "./accounts";

export interface SecurityAlert {
  id: string;
  type:
    | "new_device_access"
    | "email_address_updated"
    | "new_connection"
    | "new_account_opened"
    | "identity_verified";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  date: string; // ISO date string
  institution?: Institution;
  accountNumber?: string;
  status: "pending" | "resolved" | "investigating";
  amount?: number; // For financial alerts
  location?: string; // For location-based alerts
}

export const defaultSecurityAlerts: SecurityAlert[] = [
  {
    id: "alert-1",
    type: "new_device_access",
    severity: "high",
    title: "New device access",
    description:
      "Account accessed from unrecognized device in San Francisco, CA",
    date: "2024-01-15T10:30:00Z",
    institution: {
      id: "1",
      institutionName: "Chase Bank",
      icon: "https://logo.clearbit.com/chase.com",
      accounts: [],
    },
    accountNumber: "****7890",
    status: "investigating",
    location: "San Francisco, CA",
  },
  {
    id: "alert-2",
    type: "email_address_updated",
    severity: "medium",
    title: "Email address updated",
    description: "Primary email address updated for your Chase account",
    date: "2024-01-14T16:45:00Z",
    institution: {
      id: "1",
      institutionName: "Chase Bank",
      icon: "https://logo.clearbit.com/chase.com",
      accounts: [],
    },
    accountNumber: "****7890",
    status: "resolved",
  },
  {
    id: "alert-3",
    type: "new_connection",
    severity: "medium",
    title: "New connection",
    description: "Chime bank account has been linked to your profile",
    date: "2024-01-13T11:30:00Z",
    institution: {
      id: "2",
      institutionName: "Chime",
      icon: "https://logo.clearbit.com/chime.com",
      accounts: [],
    },
    accountNumber: "****4444",
    status: "resolved",
  },
  {
    id: "alert-4",
    type: "new_account_opened",
    severity: "low",
    title: "New account opened",
    description: "New savings account opened with SoFi",
    date: "2024-01-12T14:20:00Z",
    institution: {
      id: "3",
      institutionName: "SoFi",
      icon: "https://logo.clearbit.com/sofi.com",
      accounts: [],
    },
    accountNumber: "****6666",
    status: "resolved",
  },
  {
    id: "alert-5",
    type: "identity_verified",
    severity: "low",
    title: "You verified your identity",
    description: "Your identity has been successfully verified with Chase Bank",
    date: "2024-01-11T09:15:00Z",
    accountNumber: "****7890",
    status: "resolved",
  },
];
