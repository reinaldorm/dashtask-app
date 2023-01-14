import { updateDoc, doc, arrayUnion, arrayRemove, increment } from 'firebase/firestore';
import { db } from '../firebase';
import React from 'react';

type Destination = keyof UserTasksInterface;

const useTask = (uid: string) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<{ status: boolean; err: any }>({ status: false, err: null });
  const docRef = doc(db, 'users', uid);

  const move = async (task: TaskInterface, _from: Destination, _to: Destination) => {
    setLoading(true);
    const from = `tasks.${_from}`;
    const to = `tasks.${_to}`;
    try {
      await updateDoc(docRef, {
        [from]: arrayRemove(task),
        [to]: arrayUnion(task),
      });
      setError({ status: false, err: null });
    } catch (e) {
      setError({ status: true, err: e });
    }
    setLoading(false);
  };

  const create = async (newTask: TaskInterface) => {
    setLoading(true);
    try {
      await updateDoc(docRef, {
        'tasks.active': arrayUnion(newTask),
        task_count: increment(1),
      });
      setError({ status: false, err: null });
    } catch (e) {
      setError({ status: true, err: e });
    }
    setLoading(false);
  };

  return { create, move, loading, error };
};

export default useTask;
