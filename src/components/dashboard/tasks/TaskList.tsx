import React from 'react';
import TaskField from './TaskField';
import styles from './css/tasks.module.css';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TaskField
        checker='isToday'
        legend='Today'
        date_label='Today'
      />
      <TaskField
        checker='isTomorrow'
        legend='Tomorrow'
        date_label='Tomorrow'
      />
      <TaskField
        checker='isSoon'
        legend='Soon'
      />
      <TaskField
        checker='isOutOfDate'
        legend='Out of Date'
      />
    </div>
  );
};

export default TaskList;
