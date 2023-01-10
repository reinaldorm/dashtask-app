import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/add.module.css';

interface Add {
  setHeader: React.Dispatch<React.SetStateAction<1 | 2>>;
}

const Add = ({ setHeader }: Add) => {
  React.useEffect(() => {
    setHeader(2);
  }, []);

  useTitle('Add');

  return <div className={styles.add}>Add</div>;
};

export default Add;
