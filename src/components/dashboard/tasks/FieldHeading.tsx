import React from 'react';
import assets from '../../../assets/components/dashtask';
import styles from './css/tasks.module.css';

interface FieldHeadingProps {
  legend: string;
}

const FieldHeading = ({ legend }: FieldHeadingProps) => {
  return (
    <div className={styles.fieldHeading}>
      <h1 className={styles.fieldHeadingLegend}>{legend}</h1>
      <div className={styles.fieldHeadingLine}></div>
      <button>
        <img src={assets.icons.chevron_down_light} />
      </button>
    </div>
  );
};

export default FieldHeading;
