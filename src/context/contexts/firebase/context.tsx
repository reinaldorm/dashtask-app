import React from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

export interface FirebaseProps {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}

export const FirebaseContext = React.createContext<FirebaseProps | null>(null);

const { Provider } = FirebaseContext;

export default Provider;
