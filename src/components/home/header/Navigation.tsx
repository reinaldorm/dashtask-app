import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './css/header.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.headerNav}>
      <NavLink
        className={styles.navLink}
        to={'/landing'}>
        Home
      </NavLink>
      {(location.pathname === '/register' && (
        <NavLink
          className={styles.navLink}
          to={'/login'}>
          Sign In
        </NavLink>
      )) ||
        (location.pathname === '/login' && (
          <NavLink
            className={styles.navSignUp}
            to={'/register'}>
            Sign Up
          </NavLink>
        )) || (
          <>
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
          </>
        )}
    </nav>
  );
};

export default Navigation;
