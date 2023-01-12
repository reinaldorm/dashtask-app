import React from 'react';
import FormHeading from './FormHeading';
import styles from './css/add.module.css';
import Level from './Level';

interface FormLevelProps {
  setLevel: React.Dispatch<React.SetStateAction<TaskLevel>>;
  level: TaskLevel;
}

const FormLevel = ({ setLevel, level }: FormLevelProps) => {
  return (
    <div>
      <FormHeading legend='Level' />
      <div className={styles.formLevelOptions}>
        <Level
          legend='Low Priority'
          setLevel={setLevel}
          level={level}
          style={styles.levelLow}
          inputLevel={1}
        />
        <Level
          legend='Middle Priority'
          setLevel={setLevel}
          level={level}
          style={styles.levelMid}
          inputLevel={2}
        />
        <Level
          legend='High Priority'
          setLevel={setLevel}
          level={level}
          style={styles.levelHigh}
          inputLevel={3}
        />
      </div>
    </div>
  );
};

export default FormLevel;
