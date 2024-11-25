import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  signup: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
}

// Mock user data - In a real app, this would be in a database
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'demo123',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Demo Corp',
  },
];

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (credentials) => {
        const user = MOCK_USERS.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
          throw new Error('Invalid email or password');
        }

        const { password, ...userData } = user;
        set({ user: userData, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      signup: async (userData) => {
        // In a real app, this would make an API call
        const newUser = {
          id: Math.random().toString(),
          ...userData,
        };
        
        const { password, ...user } = newUser;
        set({ user, isAuthenticated: true });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);