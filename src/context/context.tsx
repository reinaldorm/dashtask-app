import React from 'react';
import { UserProps } from './contexts/user/context';
import { TasksProps } from './contexts/tasks/context';

export interface StoreProps {
  user: UserProps;
  tasks: TasksProps;
}

export const StoreContext = React.createContext<StoreProps | null>(null);

export const { Provider } = StoreContext;
