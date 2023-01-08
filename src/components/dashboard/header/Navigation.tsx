import React from 'react';
import styles from './css/header.module.css';
import NavAdd from './NavAdd';
import NavUser from './NavUser';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavAdd />
      <NavUser />
    </nav>
  );
};

export default Navigation;
