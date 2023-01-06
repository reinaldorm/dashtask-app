import React from 'react';
import styles from './css/signin.module.css';
import FormArt from './FormArt';
import FormInputs from './FormInputs';
import assets from '../../../assets/components/home';

const Form = () => {
  return (
    <div className={styles.form}>
      <FormArt
        src={assets.bg.login.src}
        alt={assets.bg.login.alt}
      />
      <FormInputs />
    </div>
  );
};

export default Form;
