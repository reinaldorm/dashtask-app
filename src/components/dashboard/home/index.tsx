import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/home.module.css';

interface Home {
  setHeader: React.Dispatch<React.SetStateAction<1 | 2>>;
}

const Home = ({ setHeader }: Home) => {
  React.useEffect(() => {
    setHeader(1);
  }, []);

  useTitle('Home');

  return <div className={styles.home}>Home</div>;
};

export default Home;
