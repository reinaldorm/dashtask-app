import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/header.module.css';

const Navigation = () => {
  return (
    <nav className={styles.headerNav}>
      <NavLink
        className={styles.navLink}
        to={'/landing'}>
        Home
      </NavLink>
      <NavLink
        className={styles.navLink}
        to={'/login'}>
        Sign In
      </NavLink>
      <NavLink
        className={styles.navSignUp}
        to={'/register'}>
        Sign Up
      </NavLink>
    </nav>
  );
};

export default Navigation;
