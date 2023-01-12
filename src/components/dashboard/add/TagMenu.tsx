import React from 'react';
import assets from '../../../assets/components/dashtask';
import TaskTag from '../tasks/TaskTag';
import styles from './css/add.module.css';

interface TagMenuProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
  task: NewTaskInterface;
}

const TagMenu = ({ setTask, setMenu, task }: TagMenuProps) => {
  const insetTag = (tag: TaskDefaultTags) => {
    setMenu(false);
    if (task.tags.length < 3 && !task.tags.includes(tag)) {
      setTask((task) => ({ ...task, tags: [...task.tags, tag] }));
    }
  };

  return (
    <div className={styles.tagMenu}>
      <button
        onClick={(e) => {
          e.preventDefault();
          insetTag('work');
        }}
        className={styles.tagMenuItem}>
        <TaskTag tag={assets.tags.work} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          insetTag('misc');
        }}
        className={styles.tagMenuItem}>
        <TaskTag tag={assets.tags.misc} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          insetTag('study');
        }}
        className={styles.tagMenuItem}>
        <TaskTag tag={assets.tags.study} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          insetTag('hobbie');
        }}
        className={styles.tagMenuItem}>
        <TaskTag tag={assets.tags.hobbie} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          insetTag('health');
        }}
        className={styles.tagMenuItem}>
        <TaskTag tag={assets.tags.health} />
      </button>
    </div>
  );
};

export default TagMenu;
