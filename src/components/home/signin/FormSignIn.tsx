import React from 'react';
import assets from '../../../assets/components/home';
import styles from './css/signin.module.css';

const FormLogin = () => {
  return (
    <div className={styles.formLogin}>
      <div className={styles.formLoginLinks}>
        <button>
          <img
            src={assets.brand.google.src}
            alt={assets.brand.google.src}
          />
          Google
        </button>
        <button>
          <img
            src={assets.brand.facebook.src}
            alt={assets.brand.facebook.src}
          />
          Facebook
        </button>
      </div>
      <button className={styles.formLoginSubmit}>Sign In</button>
    </div>
  );
};

export default FormLogin;
