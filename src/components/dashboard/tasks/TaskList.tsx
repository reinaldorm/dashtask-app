import React from 'react';
import TodayField from './TodayField';
import TomorrowField from './TomorrowField';
import SoonField from './SoonField';
import styles from './css/tasks.module.css';
import OutdatedField from './OutdatedField';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TodayField />
      <TomorrowField />
      <SoonField />
      <OutdatedField />
    </div>
  );
};

export default TaskList;
