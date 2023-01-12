import React from 'react';
import FormHeading from './FormHeading';
import TagList from './TagList';
import styles from './css/add.module.css';
import assets from '../../../assets/components/dashtask';

interface FormTagsProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const FormTags = ({ task, setTask }: FormTagsProps) => {
  return (
    <div>
      <FormHeading legend="Tags" />
      <TagList
        setTask={setTask}
        task={task}
      />
    </div>
  );
};

export default FormTags;
