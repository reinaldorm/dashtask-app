import React from 'react';
import styles from './css/add.module.css';

interface FormHeadingProps {
  legend: string;
}

const FormHeading = ({ legend }: FormHeadingProps) => {
  return (
    <div className={styles.formHeading}>
      <h1 className={styles.formHeadingLegend}>{legend}</h1>
      <div className={styles.formHeadingLine}></div>
    </div>
  );
};

export default FormHeading;
