import React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import useAuth from '../../hooks/useAuth';
import Provider from './context';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const { auth, db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { user, authenticating } = useAuth();
  const navigate = useNavigate();

  const userSignUp = async (username: string, email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    const userInfo: UserInterface = {
      username,
      email,
      task_count: 1,
      custom_tags: [],
    };

    const userTask: UserTaskInterface = {
      deleted: [],
      archived: [],
      completed: [],
      tasks: [
        {
          task_initial_date: Date.now(),
          task_final_date: Date.now() + 8.64e7,
          task_tags: ['work'],
          task_custom_tags: [],
          task_name: 'First Task',
          task_status: 1,
          task_level: 1,
        },
      ],
    };

    await setDoc(doc(db, 'users', user.uid), userInfo);
    await setDoc(doc(db, 'users-tasks', user.uid), userTask);
  };

  const userSignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/dashboard');
  };

  const userSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  return <Provider value={{ userSignUp, userSignIn, userSignOut, user, authenticating }}>{children}</Provider>;
};

export default UserProvider;
