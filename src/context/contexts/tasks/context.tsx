import React from 'react';

export interface TasksProps {
  tasks: number;
}

export const TasksContext = React.createContext<TasksProps | null>(null);

const { Provider } = TasksContext;

export default Provider;
