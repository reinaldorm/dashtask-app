import React from 'react';
import global from '../../assets/components/global';
import styles from './css/dashboard.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img
        className={styles.loadingIcon}
        src={global.brand.brand_icon_dashtask}
      />
    </div>
  );
};

export default Loading;
