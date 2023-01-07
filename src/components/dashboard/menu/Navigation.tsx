import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/menu.module.css';
import assets from '../../../assets/components/dashtask';

interface NavigationProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation = ({ setLocation }: NavigationProps) => {
  const handleLocation = ({ currentTarget }: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentTarget.textContent) {
      setLocation(currentTarget.textContent);
    }
  };

  return (
    <nav className={styles.navigation}>
      <NavLink
        onClick={handleLocation}
        className={styles.navigationLink}
        to="home">
        <img src={assets.icons.home} />
        Home
      </NavLink>
      <NavLink
        onClick={handleLocation}
        className={styles.navigationLink}
        to="tasks">
        <img src={assets.icons.tasks} />
        Tasks
      </NavLink>
      <NavLink
        onClick={handleLocation}
        className={styles.navigationLink}
        to="add">
        <img src={assets.icons.add_rect} />
        Add
      </NavLink>
      <NavLink
        onClick={handleLocation}
        className={styles.navigationLink}
        to="archive">
        <img src={assets.icons.box} />
        Archive
      </NavLink>
    </nav>
  );
};

export default Navigation;
