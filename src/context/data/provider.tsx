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
  const userData = useData<UserInterface>(db, user.uid, 'users', 'username');
  const taskData = useData<UserTaskInterface>(db, user.uid, 'users-tasks', 'active');

  return <Provider value={{ user, userData, taskData }}>{children}</Provider>;
};

export default DataProvider;
