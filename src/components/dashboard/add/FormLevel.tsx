import React from 'react';
import FormHeading from './FormHeading';
import styles from './css/add.module.css';
import Level from './Level';

interface FormLevelProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const FormLevel = ({ task, setTask }: FormLevelProps) => {
  return (
    <div>
      <FormHeading legend="Level" />
      <div className={styles.formLevelOptions}>
        <Level
          legend="Low Priority"
          setTask={setTask}
          task={task}
          style={styles.levelLow}
          inputLevel={1}
        />
        <Level
          legend="Middle Priority"
          setTask={setTask}
          task={task}
          style={styles.levelMid}
          inputLevel={2}
        />
        <Level
          legend="High Priority"
          setTask={setTask}
          task={task}
          style={styles.levelHigh}
          inputLevel={3}
        />
      </div>
    </div>
  );
};

export default FormLevel;
