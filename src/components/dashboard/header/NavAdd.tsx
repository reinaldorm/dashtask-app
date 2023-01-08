import React from 'react';
import styles from './css/header.module.css';
import assets from '../../../assets/components/dashtask';

const NavAdd = () => {
  return (
    <button className={styles.addTask}>
      <img
        src={assets.icons.add_circle}
        alt='add-task-icon'
      />
      Add Task
    </button>
  );
};

export default NavAdd;
