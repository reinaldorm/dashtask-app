import React from 'react';
import gsap, { Power4 } from 'gsap';
import styles from './css/dashboard.module.css';
import { DataContext, DataProps } from '../../context/data/context';

interface TransitionProps {
  message: string;
}

const Transition = ({ message }: TransitionProps) => {
  const { userData } = React.useContext(DataContext) as DataProps;
  const [ongoing, setOngoing] = React.useState(false);

  React.useEffect(() => {
    gsap
      .to(`.${styles.transitionCover}`, {
        onStart: () => setOngoing(true),
        duration: 1,
        delay: 0.1,
        ease: Power4.easeOut,
        width: '100%',
        justifySelf: 'flex-start',
      })
      .then(() =>
        gsap.to(`.${styles.transitionCover}`, {
          onComplete: () => setOngoing(false),
          duration: 1,
          delay: 0.25,
          ease: Power4.easeOut,
          width: '0%',
          justifySelf: 'flex-end',
        })
      );
  }, []);

  return (
    <div className={styles.transition}>
      <div className={styles.transitionCover}>
        <p className={styles.transitionMessage}>
          {message} <strong>{userData.data?.username}!</strong>
        </p>
      </div>
    </div>
  );
};

export default Transition;
