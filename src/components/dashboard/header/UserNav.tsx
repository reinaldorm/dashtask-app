import React from 'react';
import { useNavigate } from 'react-router';
import assets from '../../../assets/components/dashtask';
import { DataContext, DataProps } from '../../../context/data/context';
import styles from './css/header.module.css';

const UserNav = () => {
  const navigate = useNavigate();
  const { updateLocation } = React.useContext(DataContext) as DataProps;

  const handleClick = (to: string) => {
    updateLocation(to);
    navigate(to);
  };

  return (
    <div className={styles.userNav}>
      <button
        onClick={() => handleClick('account')}
        className={styles.userNavLink}>
        <img
          src={assets.icons.user}
          alt='user-icon'
        />{' '}
        Account
      </button>
      <button
        onClick={() => handleClick('settings')}
        className={styles.userNavLink}>
        <img
          src={assets.icons.settings}
          alt='settings-icon'
        />{' '}
        Settings
      </button>
    </div>
  );
};

export default UserNav;
