import React from 'react';
import TaskTag from './TaskTag';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';

interface TaskInfoTagsProps {
  tags: Array<TaskDefaultTags>;
  custom_tags: Array<TaskCustomTags>;
}

const TaskInfoTags = ({ tags }: TaskInfoTagsProps) => {
  return (
    <div className={styles.taskInfoTags}>
      {tags.map((tag) => (
        <TaskTag
          key={tag}
          tag={assets.tags[tag]}
        />
      ))}
    </div>
  );
};

export default TaskInfoTags;
