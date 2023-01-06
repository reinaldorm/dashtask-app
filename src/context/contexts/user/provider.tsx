import React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import Provider from './context';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const { auth, db } = React.useContext(FirebaseContext) as FirebaseProps;
  const [user, setUser] = React.useState(auth.currentUser);

  onAuthStateChanged(auth, () => {
    setUser(auth.currentUser);
  });

  const userSignUp = async (username: string, email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', user.uid), {
      username,
      email,
      task_count: 0,
    });
  };

  const userSignIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    signOut(auth);
  };

  return <Provider value={{ userSignUp, userSignIn, userSignOut, user }}>{children}</Provider>;
};

export default UserProvider;
