import React from 'react';
import styles from './css/signup.module.css';
import FormArt from './FormArt';
import FormInputs from './FormInputs';
import assets from '../../../assets/components/home';

const Form = () => {
  return (
    <div className={styles.form}>
      <FormInputs />
      <FormArt
        src={assets.bg.register.src}
        alt={assets.bg.register.alt}
      />
    </div>
  );
};

export default Form;
