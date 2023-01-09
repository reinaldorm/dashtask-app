import React from 'react';
import useTitle from '../../../hooks/useTitle';
import styles from './css/landing.module.css';

const Landing = () => {
  useTitle('Homepage');

  return (
    <div className={styles.landing}>
      <h1 className={styles.landingHeading}>
        Routine built in blocks<strong className={styles.landingHeadingStrong}>.</strong>
      </h1>
      <p className={styles.landingDescription}>
        Let <strong>Dashtask</strong> take care of <strong>less</strong> important things while you do the{' '}
        <span>important</span> ones.
      </p>
    </div>
  );
};

export default Landing;
