import React from 'react';
import styles from './css/add.module.css';

interface LevelProps {
  setLevel: React.Dispatch<React.SetStateAction<TaskLevel>>;
  inputLevel: TaskLevel;
  level: TaskLevel;
  style: string;
  legend: string;
}

const Level = ({ setLevel, inputLevel, level, style, legend }: LevelProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (level !== inputLevel) {
      setLevel(inputLevel);
    }
  };

  return (
    <button
      className={level !== inputLevel ? styles.formLevel : `${style} ${styles.formLevel}`}
      onClick={handleClick}>
      {legend}
    </button>
  );
};

export default Level;
