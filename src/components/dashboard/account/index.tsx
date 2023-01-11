import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import styles from './css/account.module.css';
import useTitle from '../../../hooks/useTitle';

const Account = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Account');

  React.useEffect(() => {
    setSection('account');
  }, []);

  return <div className={styles.account}>Account</div>;
};

export default Account;
