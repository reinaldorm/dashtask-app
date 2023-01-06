import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/signup.module.css';

const FormHeading = () => {
  return (
    <div className={styles.formHeading}>
      <h1 className={styles.formHeadingH1}>Sign Up</h1>
      <NavLink
        className={styles.formHeadingNavLink}
        to='/login'>
        Already a member?
      </NavLink>
    </div>
  );
};

export default FormHeading;
