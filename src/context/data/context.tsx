import React from 'react';
import { User } from 'firebase/auth';

export interface DataProps {
  user: User;
  userData: {
    data: UserDataInterface | null;
    loading: boolean;
    getData: () => Promise<void>;
  };
}

export const DataContext = React.createContext<DataProps | null>(null);

const { Provider } = DataContext;

export default Provider;
