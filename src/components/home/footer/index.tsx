import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import assets from '../../../assets/components/home';
import styles from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink to={'/landing'}>
        <img
          src={assets.brand.dashtask_outlined.src}
          alt={assets.brand.dashtask_outlined.alt}
        />
      </NavLink>
      <Navigation />
    </div>
  );
};

export default Footer;
