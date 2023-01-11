import { Firestore, updateDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import React from 'react';

type Destination = keyof UserTaskInterface;

function isDocument(value: any): value is UserTaskInterface {
  if ('active' in value && 'archived' in value) {
    return true;
  } else {
    return false;
  }
}

const useTask = (db: Firestore, uid: string) => {
  const [loading, setLoading] = React.useState(true);
  const docRef = doc(db, 'users-tasks', uid);

  const updateTask = async (id: string, newTask: TaskInterface) => {
    setLoading(true);
    try {
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data() as unknown;

      if (docSnap.exists() && isDocument(docData)) {
        const { active } = docData;
        active.forEach((task) => {
          if (task.task_id === id) {
            task = newTask;
          }
        });

        updateDoc(docRef, {
          active,
        });
      }
    } catch (e) {}
    setLoading(false);
  };

  return { updateTask, loading };
};

export default useTask;
