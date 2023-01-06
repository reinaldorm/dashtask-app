import React from 'react';

export interface TasksProps {
  tasks: Array<TaskInterface> | null;
}

export const TasksContext = React.createContext<TasksProps | null>(null);

const { Provider } = TasksContext;

export default Provider;
