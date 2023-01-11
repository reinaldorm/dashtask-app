import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/menu.module.css';
import assets from '../../../assets/components/dashtask';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={styles.navigationLink}
        to='home'>
        <img src={assets.icons.home} />
        Home
      </NavLink>
      <NavLink
        className={styles.navigationLink}
        to='tasks'>
        <img src={assets.icons.tasks} />
        Tasks
      </NavLink>
      <NavLink
        className={styles.navigationLink}
        to='add'>
        <img src={assets.icons.add_rect} />
        Add
      </NavLink>
      <NavLink
        className={styles.navigationLink}
        to='archive'>
        <img src={assets.icons.box} />
        Archive
      </NavLink>
    </nav>
  );
};

export default Navigation;
