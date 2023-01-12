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
  const [loading, setLoading] = React.useState(false);
  const docRef = doc(db, 'users-tasks', uid);

  const createTask = async (newTask: TaskInterface) => {
    setLoading(true);
    try {
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data() as unknown;

      if (docSnap.exists() && isDocument(docData)) {
        const { active } = docData;
        active.push(newTask);
        updateDoc(docRef, {
          active,
        });
      }
    } catch (e) {
      console.log('Something gone wrong:', e);
    }
    setLoading(false);
  };

  return { createTask, loading };
};

export default useTask;
