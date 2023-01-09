import React from 'react';
import Task from './Task';
import styles from './css/tasks.module.css';

interface FieldListProps {
  tasks: Array<TaskInterface>;
  date_label?: string;
}

const FieldList = ({ tasks, date_label }: FieldListProps) => {
  return (
    <div className={styles.fieldList}>
      {tasks.map((task) => (
        <Task
          key={task.task_name}
          date_label={date_label}
          task={task}
        />
      ))}
    </div>
  );
};

export default FieldList;
