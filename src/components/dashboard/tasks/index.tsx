import React from 'react';
import styles from './css/tasks.module.css';
import TaskList from './TaskList';

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <TaskList />
    </div>
  );
};

export default Tasks;
