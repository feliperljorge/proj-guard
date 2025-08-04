import { Institution } from "./accounts";

export interface SecurityAlert {
  id: string;
  type:
    | "new_device_access"
    | "email_address_updated"
    | "new_connection"
    | "new_account_opened"
    | "identity_verified";
  title: string;
  description: string;
  date: string; // ISO date string
  institutions?: Institution[];
  status: "pending" | "resolved" | "investigating";
  amount?: number; // For financial alerts
  location?: string; // For location-based alerts
}

export const defaultSecurityAlerts: SecurityAlert[] = [
  {
    id: "alert-1",
    type: "new_device_access",
    title: "New device access",
    description:
      "Account accessed from unrecognized device in San Francisco, CA",
    date: "2024-01-15T10:30:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
      },

      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
      },
    ],
    status: "investigating",
    location: "San Francisco, CA",
  },
  {
    id: "alert-2",
    type: "email_address_updated",
    title: "Email address updated",
    description: "Primary email address updated for your Chase account",
    date: "2024-01-14T16:45:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-4",
    type: "new_account_opened",
    title: "New account opened",
    description: "New savings account opened with SoFi",
    date: "2024-01-12T14:20:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-5",
    type: "identity_verified",
    title: "You verified your identity",
    description: "Your identity has been successfully verified with Chase Bank",
    date: "2024-01-11T09:15:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
      },
    ],
    status: "resolved",
  },
];
