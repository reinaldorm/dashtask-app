import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/signin.module.css';

const FormHeading = () => {
  return (
    <div className={styles.formHeading}>
      <h1 className={styles.formHeadingH1}>Sign In</h1>
      <NavLink
        className={styles.formHeadingNavLink}
        to='/register'>
        Not a member?
      </NavLink>
    </div>
  );
};

export default FormHeading;
