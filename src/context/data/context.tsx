import React from 'react';
import { User } from 'firebase/auth';

export interface DataProps {
  user: User;
  userData: {
    data: UserInterface | null;
    getData: () => Promise<void>;
    loading: boolean;
  };
  taskData: {
    data: UserTaskInterface | null;
    getData: () => Promise<void>;
    loading: boolean;
  };
}

export const DataContext = React.createContext<DataProps | null>(null);

const { Provider } = DataContext;

export default Provider;
