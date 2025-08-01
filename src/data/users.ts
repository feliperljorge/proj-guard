export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth: string;
  avatar?: string; // URL to user avatar
  isActive: boolean;
  createdAt: string; // ISO date string
  lastLogin?: string; // ISO date string
}

export const defaultUser: User = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "1990-05-15",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  isActive: true,
  createdAt: "2024-01-15T10:30:00Z",
  lastLogin: "2024-12-19T14:45:00Z",
};
