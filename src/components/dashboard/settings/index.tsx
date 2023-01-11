import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/settings.module.css';

const Settings = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Settings');

  React.useEffect(() => {
    setSection('settings');
  }, []);

  return <div className={styles.settings}>Settings</div>;
};

export default Settings;
