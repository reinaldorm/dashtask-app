import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/archive.module.css';

interface Archive {
  setHeader: React.Dispatch<React.SetStateAction<1 | 2>>;
}

const Archive = ({ setHeader }: Archive) => {
  React.useEffect(() => {
    setHeader(1);
  }, []);

  useTitle('Archive');

  return <div className={styles.archive}>Archive</div>;
};

export default Archive;
