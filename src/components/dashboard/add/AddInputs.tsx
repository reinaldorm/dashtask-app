import React from 'react';
import FormInput from './FormInput';
import FormLevel from './FormLevel';
import FormDate from './FormDate';
import FormSubmit from './FormSubmit';
import FormTags from './FormTags';
import styles from './css/add.module.css';

interface AddInputsProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const AddInputs = ({ task, setTask }: AddInputsProps) => {
  return (
    <div
      onSubmit={() => {}}
      className={styles.addInputs}>
      <FormInput
        setTask={setTask}
        task={task}
      />
      <FormLevel
        setTask={setTask}
        task={task}
      />
      <FormDate
        setTask={setTask}
        task={task}
      />
      <FormTags
        task={task}
        setTask={setTask}
      />
      <FormSubmit />
    </div>
  );
};

export default AddInputs;
