import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/add.module.css';

const Add = () => {
  useTitle('Add');

  return <div className={styles.add}>Add</div>;
};

export default Add;
