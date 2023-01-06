import React from 'react';
import styles from './css/landing.module.css';
import { StoreContext, StoreProps } from '../../../context/context';

const Landing = () => {
  const { user } = React.useContext(StoreContext) as StoreProps;

  return (
    <div className={styles.landing}>
      <h1 className={styles.landingHeading}>
        Routine built in blocks<strong className={styles.landingHeadingStrong}>.</strong>
      </h1>
      <p className={styles.landingDescription}>
        Let <strong>Dashtask</strong> take care of <strong>less</strong> important things while you
        do the <span>important</span> ones.
      </p>
    </div>
  );
};

export default Landing;
