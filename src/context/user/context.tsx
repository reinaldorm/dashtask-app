import { User } from 'firebase/auth';
import React from 'react';

export interface UserProps {
  userSignUp: (username: string, email: string, password: string) => Promise<void>;
  userSignIn: (email: string, password: string) => Promise<void>;
  userSignOut: () => void;
  user: User | null | 1;
}

export const UserContext = React.createContext<UserProps | null>(null);

const { Provider } = UserContext;

export default Provider;
