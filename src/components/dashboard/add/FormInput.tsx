import React from 'react';
import styles from './css/add.module.css';
import FormHeading from './FormHeading';

interface FormInputProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const FormInput = ({ task, setTask }: FormInputProps) => {
  const handleName = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    setTask((task) => ({ ...task, name: currentTarget.value }));
  };

  return (
    <div>
      <FormHeading legend="Name" />
      <input
        value={task.name}
        className={styles.formInput}
        placeholder="Enter your task name"
        onChange={handleName}
      />
    </div>
  );
};

export default FormInput;
