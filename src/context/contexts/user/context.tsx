import React from 'react';

export interface UserProps {
  userCreate: (username: string, email: string, password: string) => void;
  userSignOut: () => void;
}

export const UserContext = React.createContext<UserProps | null>(null);

const { Provider } = UserContext;

export default Provider;
