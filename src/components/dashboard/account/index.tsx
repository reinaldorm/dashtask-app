import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import { DataContext, DataProps } from '../../../context/data/context';
import Loading from '../../../pages/dashboard/Loading';
import AccountForm from './AccountForm';
import useTitle from '../../../hooks/useTitle';
import styles from './css/account.module.css';

const Account = () => {
  const { userData } = React.useContext(DataContext) as DataProps;
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Account');

  React.useEffect(() => {
    setSection('account');
  }, []);

  if (!userData.data) {
    return <Loading />;
  } else
    return (
      <div className={styles.account}>
        <AccountForm data={userData.data} />
      </div>
    );
};

export default Account;
