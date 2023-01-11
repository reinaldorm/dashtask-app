import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/home.module.css';

const Home = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Home');

  React.useEffect(() => {
    setSection('home');
  }, []);

  return <div className={styles.home}>Home</div>;
};

export default Home;
