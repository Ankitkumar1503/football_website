export type FootType = 'left' | 'right';

export interface AppStats {
  total: number;
  left: number;
  right: number;
  downloads: number;
  countries: number;
}

export interface PlayerRegistration {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  footPreference: FootType;
  country: string;
  ageGroup?: string;
  position?: string;
  noteToCoach?: string;
  paymentStatus?: 'paid' | 'unpaid';
  address?: {
    street?: string;
    city?: string;
    zipCode?: string;
  };
}

export interface UserAuthData {
  id?: number | string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  footPreference?: FootType;
  country?: string;
  paymentStatus?: 'paid' | 'unpaid';
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: UserAuthData;
  message?: string;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  footPreference: FootType;
  registrationDate: string;
  paymentStatus: 'paid' | 'unpaid';
}

export interface AdminUsersResponse {
  users: AdminUser[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  total?: number;
  page?: number;
  totalPages?: number;
}
