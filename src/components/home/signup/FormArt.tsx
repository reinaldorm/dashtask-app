import React from 'react';
import gsap from 'gsap';
import styles from './css/signup.module.css';

const FormArt = ({ src, alt }: { src: string; alt: string }) => {
  const comp = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(comp.current, {
        duration: 1,
        ease: 'power4.out',
        x: -50,
        opacity: 0,
      }).from(comp.current!.children[0], {
        duration: 1,
        delay: -0.75,
        ease: 'power4.out',
        scale: 1.25,
        opacity: 0,
      });
    }, comp);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={comp}
      className={styles.formArt}>
      <img
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default FormArt;
