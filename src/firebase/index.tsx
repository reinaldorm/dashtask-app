import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyATTRWeZdENsd3-Wb0bBVdQqah7IYBMKAw', // cspell:disable-line
  authDomain: 'dashtask-9b13d.firebaseapp.com', // cspell:disable-line
  projectId: 'dashtask-9b13d', // cspell:disable-line
  storageBucket: 'dashtask-9b13d.appspot.com', // cspell:disable-line
  messagingSenderId: '987834041339', // cspell:disable-line
  appId: '1:987834041339:web:95cf1bcf1c2992909c415e', // cspell:disable-line
  measurementId: 'G-F1GQJYGF39', // cspell:disable-line
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence);
