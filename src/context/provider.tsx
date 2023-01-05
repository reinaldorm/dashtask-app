import React from 'react';
import { Provider } from './context';
import { UserContext, UserProps } from './contexts/user/context';
import { TasksContext, TasksProps } from './contexts/tasks/context';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const user = React.useContext(UserContext) as UserProps;
  const tasks = React.useContext(TasksContext) as TasksProps;

  return <Provider value={{ user, tasks }}>{children}</Provider>;
};

export default StoreProvider;
