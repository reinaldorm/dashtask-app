import React from 'react';
import { db } from '../../firebase';
import { User } from 'firebase/auth';
import Provider from './context';
import useData from '../../hooks/useData';

interface DataProviderProps {
  user: User;
  children: React.ReactNode;
}

const DataProvider = ({ user, children }: DataProviderProps) => {
  const userData = useData(db, user.uid);

  return <Provider value={{ user, userData }}>{children}</Provider>;
};

export default DataProvider;
