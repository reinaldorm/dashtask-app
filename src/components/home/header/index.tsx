import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import assets from '../../../assets/components/home';
import styles from './css/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={'/'}>
        <img
          src={assets.brand.dashtask.src}
          alt={assets.brand.dashtask.alt}
        />
      </NavLink>
      <Navigation />
    </div>
  );
};

export default Header;
