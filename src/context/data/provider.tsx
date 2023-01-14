import React from 'react';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import { User } from 'firebase/auth';
import Provider from './context';
import useData from '../../hooks/useData';

interface DataProviderProps {
  user: User;
  children: React.ReactNode;
}

const DataProvider = ({ user, children }: DataProviderProps) => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const userData = useData(db, user.uid);

  return <Provider value={{ user, userData }}>{children}</Provider>;
};

export default DataProvider;
