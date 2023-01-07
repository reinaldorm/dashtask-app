import { DocumentData } from 'firebase/firestore';
import React from 'react';

interface Data {
  data: DocumentData | null;
  getData: () => Promise<void>;
  loading: boolean;
}

export interface DataProps {
  userData: Data;
  taskData: Data;
}

export const DataContext = React.createContext<DataProps | null>(null);

const { Provider } = DataContext;

export default Provider;
