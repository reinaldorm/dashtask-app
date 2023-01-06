import React, { ChangeEvent } from 'react';
import styles from './css/signin.module.css';
import { useInputMap } from '../../../hooks/useInput';

interface FormInputProps {
  name: string;
  legend: string;
  label: string;
  type: string;
  value: useInputMap;
}

const FormInput = ({ name, legend, label, type, value }: FormInputProps) => {
  return (
    <div>
      <label
        className={styles.formInputLabel}
        htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.formInput}
        id={name}
        name={name}
        placeholder={legend}
        type={type}
        value={value.value}
        onChange={({ target }) => value.setValue(target.value)}
      />
    </div>
  );
};

export default FormInput;
