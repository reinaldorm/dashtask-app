import React from 'react';
import styles from './css/header.module.css';
import NavAdd from './NavAdd';
import NavUser from './NavUser';

interface NavigationProps {
  header: 1 | 2;
}

const Navigation = ({ header }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      <NavAdd header={header} />
      <NavUser />
    </nav>
  );
};

export default Navigation;
