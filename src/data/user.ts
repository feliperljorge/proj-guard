export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth: string;
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
  location?: string;
  socialSecurity?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export const defaultUser: User = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "1990-05-15",
  avatar:
    "https://img.freepik.com/premium-photo/ai-generated-images-build-user-profile-page_1290175-101.jpg",
  createdAt: "2024-01-15T10:30:00Z",
  lastLogin: "2024-12-19T14:45:00Z",
  city: "San Francisco",
  state: "CA",
  zip: "94101",
  socialSecurity: "***-**-1234",
};
