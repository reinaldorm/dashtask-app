import React from 'react';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import { User } from 'firebase/auth';
import useUser from '../../hooks/useUser';
import useTask from '../../hooks/useTask';
import Provider from './context';

interface DataProviderProps {
  user: User;
  children: React.ReactNode;
}

const DataProvider = ({ user, children }: DataProviderProps) => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const userData = useUser(db, user.uid);
  const taskData = useTask(db, user.uid);

  React.useEffect(() => {
    console.log(userData.data);
    console.log(taskData.data);
  }, []);

  return <Provider value={{ userData, taskData }}>{children}</Provider>;
};

export default DataProvider;
