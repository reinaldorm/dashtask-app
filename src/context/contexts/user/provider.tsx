import React from 'react';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import Provider from './context';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const { app, auth } = React.useContext(FirebaseContext) as FirebaseProps;

  React.useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return <Provider value={{ user: false }}>{children}</Provider>;
};

export default UserProvider;
