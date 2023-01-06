import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import assets from '../../../assets/components/home';
import styles from './css/header.module.css';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div className={styles.header}>
      <NavLink to={'/landing'}>
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
