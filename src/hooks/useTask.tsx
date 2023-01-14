import { Firestore, updateDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import React from 'react';

type Destination = keyof UserTasksInterface;

const useTask = (db: Firestore, uid: string) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const docRef = doc(db, 'users-tasks', uid);

  const readData = async () => {
    const snapshot = await getDoc(docRef);
    const data = snapshot.data() as unknown;

    return data;
  };

  const move = async (task: TaskInterface, from: Destination, to: Destination) => {
    setLoading(true);
    try {
      const data = (await readData()) as UserDataInterface;

      data.tasks[from] = data.tasks[from].filter(({ id }) => id !== task.id);
      data.tasks[to].push(task);

      await updateDoc(docRef, {
        tasks: { [from]: data.tasks[from], [to]: data.tasks[to] },
      });
      setError(false);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  const create = async (newTask: TaskInterface) => {
    setLoading(true);
    try {
      const data = (await readData()) as UserDataInterface;

      data.tasks.active.push(newTask);
      await updateDoc(docRef, {
        tasks: { active: data.tasks.active },
      });
      setError(false);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  return { create, move, loading, error };
};

export default useTask;
