import React from 'react';
import { FirebaseContext, FirebaseProps } from '../../context/firebase/context';
import useTask from '../../hooks/useTask';
import styles from './css/debug.module.css';

const Debug = () => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { updateTask } = useTask(db, 'a6d56scr0mU0BLWrOaqjSWKZcU73');

  const handleDebug = () => {
    console.log('debug triggered');
  };

  return (
    <div>
      <button
        className={styles.debug}
        onClick={handleDebug}>
        Debug
      </button>
    </div>
  );
};

export default Debug;
