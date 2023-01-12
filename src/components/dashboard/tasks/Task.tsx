import React from 'react';
import TaskLevel from './TaskLevel';
import styles from './css/tasks.module.css';
import TaskInfo from './TaskInfo';
import TaskMenu from './TaskMenu';

interface TaskProps {
  task: TaskInterface;
  date_label: string | undefined;
  menu?: boolean;
}

const Task = ({ task, date_label, menu }: TaskProps) => {
  return (
    <div className={styles.task}>
      <TaskLevel level={task.task_level} />
      <TaskInfo
        task={task}
        date_label={date_label}
      />
      {menu ? null : <TaskMenu />}
    </div>
  );
};

export default Task;
