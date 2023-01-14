import React from 'react';
import TaskLevel from './TaskLevel';
import styles from './css/tasks.module.css';
import TaskInfo from './TaskInfo';
import TaskMenu from './TaskMenu';

export interface TaskProps {
  task: TaskInterface;
  date_label: string | undefined;
  menu?: boolean;
}

const Task = ({ task, date_label, menu }: TaskProps) => {
  return (
    <div className={styles.task}>
      <TaskLevel level={task.level} />
      <TaskInfo
        task={task}
        date_label={date_label}
      />
      {menu ? null : <TaskMenu task={task} />}
    </div>
  );
};

export default Task;
