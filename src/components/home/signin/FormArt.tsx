import React from 'react';
import gsap from 'gsap';
import styles from './css/signin.module.css';

const FormArt = ({ src, alt }: { src: string; alt: string }) => {
  React.useEffect(() => {
    gsap.from('.formArtImgs', { duration: 1, delay: 0.25, ease: 'power4.out', scale: 0.75, opacity: 0 });
    gsap.from('.' + styles.formArt, { duration: 1, ease: 'power4.out', x: 50, opacity: 0 });
  }, []);

  return (
    <div className={styles.formArt}>
      <img
        className='formArtImgs'
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default FormArt;
