import { Firestore, updateDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import React from 'react';

type Destination = keyof UserTaskInterface;

const useTask = (db: Firestore, uid: string) => {
  const updateTask = async (id: string) => {};

  const moveTask = async (id: string, from: Destination, to: Destination) => {
    const docRef = doc(db, 'users-task', uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() as unknown;

    if (docSnap.exists()) {
    }
  };

  const deleteTask = async (id: string) => {};

  return {};
};

export default useTask;
