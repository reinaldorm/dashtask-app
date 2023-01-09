import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/archive.module.css';

const Archive = () => {
  useTitle('Archive');

  return <div className={styles.archive}>Archive</div>;
};

export default Archive;
