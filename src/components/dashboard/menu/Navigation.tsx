import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/menu.module.css';
import assets from '../../../assets/components/dashtask';
import { DataContext, DataProps } from '../../../context/data/context';

const Navigation = () => {
  const { updateLocation } = React.useContext(DataContext) as DataProps;

  const handleLocation = (location: string) => {
    updateLocation(location);
  };

  return (
    <nav className={styles.navigation}>
      <NavLink
        onClick={() => handleLocation('home')}
        className={styles.navigationLink}
        to="home">
        <img src={assets.icons.home} />
        Home
      </NavLink>
      <NavLink
        onClick={() => handleLocation('tasks')}
        className={styles.navigationLink}
        to="tasks">
        <img src={assets.icons.tasks} />
        Tasks
      </NavLink>
      <NavLink
        onClick={() => handleLocation('add')}
        className={styles.navigationLink}
        to="add">
        <img src={assets.icons.add_rect} />
        Add
      </NavLink>
      <NavLink
        onClick={() => handleLocation('archive')}
        className={styles.navigationLink}
        to="archive">
        <img src={assets.icons.box} />
        Archive
      </NavLink>
    </nav>
  );
};

export default Navigation;
