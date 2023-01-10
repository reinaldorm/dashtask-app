import React from 'react';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';

const TaskNav = () => {
  const handleClick = (to: string) => {
    console.log('menu item triggered');
  };

  return (
    <div className={styles.taskNav}>
      <button
        onClick={() => handleClick('account')}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.check}
          alt='user-icon'
        />{' '}
        Complete Task
      </button>
      <button
        onClick={() => handleClick('settings')}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.edit}
          alt='settings-icon'
        />{' '}
        Edit Task
      </button>
      <button
        onClick={() => handleClick('settings')}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.close}
          alt='settings-icon'
        />{' '}
        Delete Task
      </button>
    </div>
  );
};

export default TaskNav;
