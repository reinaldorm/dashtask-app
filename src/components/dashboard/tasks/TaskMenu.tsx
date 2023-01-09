import React from 'react';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';

const TaskMenu = () => {
  function handleClick() {
    console.log('open menu function dispatched');
  }

  return (
    <button
      className={styles.taskMenu}
      onClick={handleClick}>
      <img
        src={assets.icons.menu}
        alt='task-menu'
      />
    </button>
  );
};

export default TaskMenu;
