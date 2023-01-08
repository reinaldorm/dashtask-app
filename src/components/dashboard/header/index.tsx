import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import styles from './css/header.module.css';
import Navigation from './Navigation';

const Header = () => {
  const { location } = React.useContext(DataContext) as DataProps;

  return (
    <div className={styles.header}>
      <h1 className={styles.legend}>{location}</h1>
      <Navigation />
    </div>
  );
};

export default Header;
