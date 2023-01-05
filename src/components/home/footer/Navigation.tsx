import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/footer.module.css';

const Navigation = () => {
  return (
    <nav className={styles.footerNav}>
      <NavLink
        className={styles.navLink}
        to={'/contact'}>
        Contact
      </NavLink>
      <NavLink
        className={styles.navLink}
        to={'/about'}>
        About
      </NavLink>
      <NavLink
        className={styles.navLink}
        to={'/faq'}>
        FAQ
      </NavLink>
      <NavLink
        className={styles.navLink}
        to={'/support'}>
        Support
      </NavLink>
    </nav>
  );
};

export default Navigation;
