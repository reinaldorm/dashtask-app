import React from 'react';
import TodayField from './TodayField';
import TomorrowField from './TomorrowField';
import SoonField from './SoonField';
import styles from './css/tasks.module.css';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TodayField />
      <TomorrowField />
      <SoonField />
    </div>
  );
};

export default TaskList;
