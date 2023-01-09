import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/home.module.css';

const Home = () => {
  useTitle('Home');

  return <div className={styles.home}>Home</div>;
};

export default Home;
