import React from 'react';
import styles from './css/landing.module.css';
import gsap, { Bounce, SteppedEase } from 'gsap';
import { StoreContext, StoreProps } from '../../../context/context';

const Landing = () => {
  const store = React.useContext(StoreContext) as StoreProps;

  React.useEffect(() => {
    gsap.from(`.${styles.landingHeading}`, { duration: 1, y: -100, ease: 'easeInOut', opacity: 0 });
    gsap.from(`.${styles.landingDescription}`, { duration: 1, y: 100, ease: 'easeInOut', opacity: 0 });

    console.log(store);
  }, []);

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
