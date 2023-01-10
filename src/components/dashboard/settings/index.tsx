import React from 'react';
import styles from './css/settings.module.css';

interface Settings {
  setHeader: React.Dispatch<React.SetStateAction<1 | 2>>;
}

const Settings = ({ setHeader }: Settings) => {
  React.useEffect(() => {
    setHeader(1);
  }, []);

  return <div className={styles.settings}>Settings</div>;
};

export default Settings;
