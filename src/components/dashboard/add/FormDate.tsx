import React, { ChangeEvent } from 'react';
import FormHeading from './FormHeading';
import styles from './css/add.module.css';
import useCheckDate from '../../../hooks/useCheckDate';

interface FormDateProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const FormDate = ({ setTask }: FormDateProps) => {
  const { isOutOfDate } = useCheckDate();

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(currentTarget.value).getTime();

    if (!isOutOfDate(date)) setTask((task) => ({ ...task, date }));
  };

  return (
    <div>
      <FormHeading legend="Date" />
      <input
        onChange={handleChange}
        className={styles.formDateInput}
        type="datetime-local"
      />
    </div>
  );
};

export default FormDate;
