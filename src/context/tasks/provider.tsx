import React from 'react';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { UserContext, UserProps } from '../user/context';
import { FirebaseContext, FirebaseProps } from '../firebase/context';
import Provider from './context';

interface TasksProviderProps {
  children: React.ReactNode;
}

const TasksProvider = ({ children }: TasksProviderProps) => {
  const { user } = React.useContext(UserContext) as UserProps;
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const [tasks, setTasks] = React.useState<Array<TaskInterface> | null>([]);

  console.log('a');

  React.useEffect(() => {
    const getTaskData = async () => {
      if (user) {
        const docRef = doc(db, 'users-tasks', user.uid);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data() as DocumentData;

        setTasks(docData.tasks);
      }
    };
    getTaskData();
  }, []);

  return <Provider value={{ tasks }}>{children}</Provider>;
};

export default TasksProvider;
