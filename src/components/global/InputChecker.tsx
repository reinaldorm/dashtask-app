import React from 'react';
import styles from './css/global.module.css';

const InputChecker = () => {
  return (
    <div className={styles.inputChecker}>
      <p className={styles.legend}>Your Password must contain:</p>
      <div className={styles.checkers}></div>
    </div>
  );
};

export default InputChecker;
