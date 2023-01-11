import React from 'react';
import TaskNav from './TaskNav';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';

const TaskMenu = () => {
  const [menu, setMenu] = React.useState(false);

  const handleOverOut = (config: boolean, handler: Element) => {
    if (config) {
      setMenu(true);
      handler.classList.add('active');
    } else {
      setMenu(false);
      handler.classList.remove('active');
    }
  };

  return (
    <div
      onClick={({ currentTarget }) => handleOverOut(true, currentTarget)}
      onMouseLeave={({ currentTarget }) => handleOverOut(false, currentTarget)}
      className={styles.taskMenu}>
      <button className={styles.taskMenuTrigger}>
        <img
          src={assets.icons.menu}
          alt='task-menu'
        />
      </button>
      {menu && <TaskNav />}
    </div>
  );
};

export default TaskMenu;
