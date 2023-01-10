import React from 'react';
import gsap, { Power4 } from 'gsap';
import { DataContext, DataProps } from '../../../context/data/context';
import Navigation from './Navigation';
import styles from './css/header.module.css';

interface HeaderProps {
  header: 1 | 2;
}

const Header = ({ header }: HeaderProps) => {
  const { location } = React.useContext(DataContext) as DataProps;

  React.useEffect(() => {
    if (header === 2) {
      gsap.to(`.${styles.transitionCover}`, {
        duration: 1.5,
        ease: Power4.easeInOut,
        scale: 60,
      });
    } else {
      gsap.to(`.${styles.transitionCover}`, {
        duration: 1.5,
        ease: Power4.easeInOut,
        scale: 0,
      });
    }
  }, [header]);

  return (
    <div className={styles.header}>
      <div className={styles.transition}>
        <div className={styles.transitionCover}></div>
      </div>
      <h1 className={styles.legend}>{location}</h1>
      <Navigation header={header} />
    </div>
  );
};

export default Header;
