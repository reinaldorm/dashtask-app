import React from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';

export interface FirebaseProps {
  app: FirebaseApp;
  auth: Auth;
}

export const FirebaseContext = React.createContext<FirebaseProps | null>(null);

const { Provider } = FirebaseContext;

export default Provider;
