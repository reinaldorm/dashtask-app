import React from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import Provider from './context';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const { auth, db } = React.useContext(FirebaseContext) as FirebaseProps;
  const [user, setUser] = React.useState<User | null | 1>(1);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  });

  const userSignUp = async (username: string, email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, 'users', user.uid), {
      username,
      email,
      task_count: 0,
    });

    await setDoc(doc(db, 'users-tasks', user.uid), {
      tasks: [
        {
          task_initial_date: Date.now(),
          task_final_date: Date.now(),
          task_tags: ['example'],
          task_name: 'task-example',
        },
      ],
    });
  };

  const userSignIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    signOut(auth);
  };

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return <Provider value={{ userSignUp, userSignIn, userSignOut, user }}>{children}</Provider>;
};

export default UserProvider;
