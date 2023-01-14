import React from 'react';
import TaskField from './TaskField';
import styles from './css/tasks.module.css';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <TaskField
        from='active'
        checker='isToday'
        legend='Today'
        date_label='Today'
      />
      <TaskField
        from='active'
        checker='isTomorrow'
        legend='Tomorrow'
        date_label='Tomorrow'
      />
      <TaskField
        from='active'
        checker='isSoon'
        legend='Soon'
      />
      <TaskField
        from='active'
        checker='isOutOfDate'
        legend='Out of Date'
      />
    </div>
  );
};

export default TaskList;
