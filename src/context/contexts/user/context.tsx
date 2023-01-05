import React from 'react';

export interface UserProps {
  user: boolean;
}

export const UserContext = React.createContext<UserProps | null>(null);

const { Provider } = UserContext;

export default Provider;
