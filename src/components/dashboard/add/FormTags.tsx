import React from 'react';
import FormHeading from './FormHeading';
import TagList from './TagList';
import styles from './css/add.module.css';
import assets from '../../../assets/components/dashtask';

interface FormTagsProps {
  setTags: React.Dispatch<React.SetStateAction<TaskDefaultTags[]>>;
  tags: TaskDefaultTags[];
}

const FormTags = ({ setTags, tags }: FormTagsProps) => {
  return (
    <div>
      <FormHeading legend='Tags' />
      <TagList
        setTags={setTags}
        tags={tags}
      />
    </div>
  );
};

export default FormTags;
