import React from 'react';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';
import TaskInfoTags from './TaskInfoTags';

interface TaskInfoProps {
  date_label: string | undefined;
  task: TaskInterface;
}

const TaskInfo = ({ task, date_label }: TaskInfoProps) => {
  return (
    <div className={styles.taskInfo}>
      <p className={styles.taskInfoDate}>
        <img
          src={assets.icons.calendar_light}
          alt='calendar-icon'
        />
        {date_label || new Date(task.task_final_date).toString()}
      </p>
      <h1 className={styles.taskInfoName}>{task.task_name}</h1>
      <TaskInfoTags
        custom_tags={task.task_custom_tags}
        tags={task.task_tags}
      />
    </div>
  );
};

export default TaskInfo;
