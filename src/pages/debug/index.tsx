import React from 'react';
import useTask from '../../hooks/useTask';
import styles from './css/debug.module.css';

const Debug = () => {
  const {} = useTask('a6d56scr0mU0BLWrOaqjSWKZcU73');

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
