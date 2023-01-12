import React from 'react';
import styles from './css/add.module.css';
import FormHeading from './FormHeading';

interface FormInputProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const FormInput = ({ name, setName }: FormInputProps) => {
  return (
    <div>
      <FormHeading legend='Name' />
      <input
        value={name}
        className={styles.formInput}
        placeholder='Enter your task name'
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
    </div>
  );
};

export default FormInput;
