import React from 'react';
import AccountField from './AccountField';
import styles from './css/account.module.css';

interface AccountFormProps {
  data: UserDataInterface;
}

const AccountForm = ({ data }: AccountFormProps) => {
  return (
    <div className={styles.accountForm}>
      <AccountField label="Username" />
      <AccountField label="Email" />
      <AccountField label="Password" />
    </div>
  );
  7;
  const handleEdit = () => {};

  return <div className={styles.accountForm}>AccountForm</div>;
};

export default AccountForm;
