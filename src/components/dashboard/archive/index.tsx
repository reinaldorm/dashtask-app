import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/archive.module.css';

const Archive = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Archive');

  React.useEffect(() => {
    setSection('archive');
  }, []);

  return <div className={styles.archive}>Archive</div>;
};

export default Archive;
