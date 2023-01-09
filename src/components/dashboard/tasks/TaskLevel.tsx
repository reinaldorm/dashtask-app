import React from 'react';
import styles from './css/tasks.module.css';
import assets from '../../../assets/components/dashtask';

interface TaskLevelProps {
  level: TaskLevel;
}

const TaskLevel = ({ level }: TaskLevelProps) => {
  return (
    <div
      className={styles.taskLevel}
      style={assets.level[level]}></div>
  );
};

export default TaskLevel;
