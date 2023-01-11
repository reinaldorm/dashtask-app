import { Firestore, updateDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import React from 'react';

type Destination = keyof UserTaskInterface;

const useTask = (db: Firestore, uid: string) => {
  const docRef = doc(db, 'users-tasks', uid);

  const updateTask = async (id?: string) => {
    try {
      console.log(docRef);
      await updateDoc(docRef, {
        active: ['a'],
      });
      console.log('doc updated');
    } catch (e) {
      console.log('something gone wrong', e);
    }
  };

  const moveTask = async (id: string, from: Destination, to: Destination) => {};

  const deleteTask = async (id: string) => {};

  return { updateTask, moveTask, deleteTask };
};

export default useTask;
