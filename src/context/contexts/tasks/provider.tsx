import React from 'react';
import Provider from './context';

interface TasksProviderProps {
  children: React.ReactNode;
}

const TasksProvider = ({ children }: TasksProviderProps) => {
  return <Provider value={{ tasks: 1 }}>{children}</Provider>;
};

export default TasksProvider;
