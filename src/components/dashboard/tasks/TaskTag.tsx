import React from 'react';
import styles from './css/tasks.module.css';

interface TaskTagProps {
  tag: {
    color: string;
    name: string;
  };
}

const TaskTag = ({ tag }: TaskTagProps) => {
  return (
    <span
      className={styles.taskTag}
      style={{ color: `${tag.color}`, backgroundColor: `${tag.color}33` }}>
      {tag.name}
    </span>
  );
};

export default TaskTag;
