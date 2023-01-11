import React from 'react';
import gsap, { Power4 } from 'gsap';
import Navigation from './Navigation';
import styles from './css/header.module.css';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';

const Header = () => {
  const { section } = React.useContext(DashboardContext) as DashboardProps;

  React.useEffect(() => {
    if (section === 'add' || section === 'account') {
      gsap.to(`.${styles.transitionCover}`, {
        duration: 1.5,
        ease: Power4.easeInOut,
        scale: 100,
      });
    } else {
      gsap.to(`.${styles.transitionCover}`, {
        duration: 1.5,
        ease: Power4.easeInOut,
        scale: 0,
      });
    }
  }, [section]);

  return (
    <div className={styles.header}>
      <div className={styles.transition}>
        <div className={styles.transitionCover}></div>
      </div>
      <h1 className={styles.legend}>{section}</h1>
      <Navigation />
    </div>
  );
};

export default Header;
