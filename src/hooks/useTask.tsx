import { Firestore, updateDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import React from 'react';

type Destination = keyof UserTaskInterface;

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
      const data = (await readData()) as UserTaskInterface;

      data[from] = data[from].filter(({ task_id }) => task_id !== task.task_id);
      data[to].push(task);

      await updateDoc(docRef, {
        [from]: data[from],
        [to]: data[to],
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
      const data = (await readData()) as UserTaskInterface;

      data.active.push(newTask);
      await updateDoc(docRef, {
        active: data.active,
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
