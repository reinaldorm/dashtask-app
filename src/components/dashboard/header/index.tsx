import React from 'react';
import styles from './css/header.module.css';
import Navigation from './Navigation';

interface HeaderProps {
  location: string;
}

const Header = ({ location }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.legend}>{location}</h1>
      <Navigation />
    </div>
  );
};

export default Header;
