import React from 'react';
import TodayField from './TodayField';
import styles from './css/tasks.module.css';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TodayField />
    </div>
  );
};

export default TaskList;
