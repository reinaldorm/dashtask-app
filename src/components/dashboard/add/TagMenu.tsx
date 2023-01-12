import React from 'react';
import assets from '../../../assets/components/dashtask';
import TaskTag from '../tasks/TaskTag';
import styles from './css/add.module.css';

interface TagMenuProps {
  setTags: React.Dispatch<React.SetStateAction<TaskDefaultTags[]>>;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  tags: Array<TaskDefaultTags>;
}

const TagMenu = ({ setTags, setMenu, tags }: TagMenuProps) => {
  const insetTag = (tag: TaskDefaultTags) => {
    setMenu(false);
    if (tags.length < 3 && !tags.includes(tag)) {
      setTags([...tags, tag]);
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
