import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/header.module.css';
import assets from '../../../assets/components/dashtask';
import { DataContext, DataProps } from '../../../context/data/context';

interface NavAddProps {
  header: 1 | 2;
}

const NavAdd = ({ header }: NavAddProps) => {
  const { updateLocation } = React.useContext(DataContext) as DataProps;

  React.useEffect(() => {}, [header]);

  return (
    <NavLink
      to="add"
      onClick={() => updateLocation('add')}
      className={styles.addTask}>
      <img
        src={assets.icons.add_circle}
        alt="add-task-icon"
      />
      Add Task
    </NavLink>
  );
};

export default NavAdd;
