import React from 'react';
import styles from './css/add.module.css';

interface LevelProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
  inputLevel: TaskLevel;
  style: string;
  legend: string;
}

const Level = ({ setTask, inputLevel, task, style, legend }: LevelProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (task.level !== inputLevel) {
      setTask((task) => ({ ...task, level: inputLevel }));
    }
  };

  return (
    <button
      className={task.level !== inputLevel ? styles.formLevel : `${style} ${styles.formLevel}`}
      onClick={handleClick}>
      {legend}
    </button>
  );
};

export default Level;
