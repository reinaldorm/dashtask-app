import React from 'react';
import styles from './css/account.module.css';

interface Account {
  setHeader: React.Dispatch<React.SetStateAction<1 | 2>>;
}

const Account = ({ setHeader }: Account) => {
  React.useEffect(() => {
    setHeader(2);
  }, []);

  return <div className={styles.account}>Account</div>;
};

export default Account;
