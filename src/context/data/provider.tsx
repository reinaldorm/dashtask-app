import React from 'react';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import { User } from 'firebase/auth';
import useData from '../../hooks/useData';
import Provider from './context';

interface DataProviderProps {
  user: User;
  children: React.ReactNode;
}

const DataProvider = ({ user, children }: DataProviderProps) => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const userData = useData(db, user.uid, 'users');
  const taskData = useData(db, user.uid, 'users-tasks');

  return <Provider value={{ userData, taskData }}>{children}</Provider>;
};

export default DataProvider;
