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
    date: "2024-01-15T10:30:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },

      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "investigating",
    location: "San Francisco, CA",
  },
  {
    id: "alert-2",
    type: "email_address_updated",
    title: "Email address updated",
    date: "2024-01-14T16:45:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-3",
    type: "new_connection",
    title: "New connection",
    date: "2024-01-13T11:20:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "pending",
  },
  {
    id: "alert-4",
    type: "new_account_opened",
    title: "New account opened",
    date: "2024-01-12T14:20:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-5",
    type: "identity_verified",
    title: "Identity verified",
    date: "2024-01-11T09:15:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-6",
    type: "new_device_access",
    title: "New device access",
    date: "2024-01-10T08:45:00Z",
    institutions: [
      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "investigating",
    location: "New York, NY",
  },
  {
    id: "alert-7",
    type: "new_connection",
    title: "New connection",
    date: "2024-01-09T15:30:00Z",
    institutions: [
      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-8",
    type: "new_account_opened",
    title: "New account opened",
    date: "2024-01-08T12:10:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "pending",
    amount: 5000,
  },
  {
    id: "alert-9",
    type: "email_address_updated",
    title: "Email address updated",
    date: "2024-01-07T19:20:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "investigating",
  },
  {
    id: "alert-10",
    type: "new_device_access",
    title: "New device access",
    date: "2024-01-06T14:15:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
    location: "Miami, FL",
  },
  {
    id: "alert-11",
    type: "identity_verified",
    title: "Identity verified",
    date: "2024-01-05T10:45:00Z",
    institutions: [
      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
  {
    id: "alert-12",
    type: "new_connection",
    title: "New connection",
    date: "2024-01-04T16:30:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "pending",
  },
  {
    id: "alert-13",
    type: "new_account_opened",
    title: "New account opened",
    date: "2024-01-03T09:25:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
    amount: 10000,
  },
  {
    id: "alert-14",
    type: "new_device_access",
    title: "New device access",
    date: "2024-01-02T22:10:00Z",
    institutions: [
      {
        id: "1",
        institutionName: "Chase Bank",
        icon: "https://logo.clearbit.com/chase.com",
        accounts: [],
        connections: [],
      },
      {
        id: "2",
        institutionName: "Chime",
        icon: "https://logo.clearbit.com/chime.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "investigating",
    location: "Multiple locations",
  },
  {
    id: "alert-15",
    type: "email_address_updated",
    title: "Email address updated",
    date: "2024-01-01T13:40:00Z",
    institutions: [
      {
        id: "3",
        institutionName: "SoFi",
        icon: "https://logo.clearbit.com/sofi.com",
        accounts: [],
        connections: [],
      },
    ],
    status: "resolved",
  },
];
