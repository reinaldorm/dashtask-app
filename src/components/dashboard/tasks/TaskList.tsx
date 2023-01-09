import React from 'react';
import TodayField from './TodayField';
import styles from './css/tasks.module.css';
import TomorrowField from './TomorrowField';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TodayField />
      <TomorrowField />
    </div>
  );
};

export default TaskList;
