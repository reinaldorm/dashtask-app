import React from 'react';
import styles from './css/header.module.css';
import assets from '../../../assets/components/dashtask';
import { DataContext, DataProps } from '../../../context/data/context';

const NavUser = () => {
  const { userData } = React.useContext(DataContext) as DataProps;

  return (
    <button className={styles.userMenu}>
      {userData.data && userData.data.username}
      <img
        src={assets.icons.chevron_down}
        alt='add-task-icon'
      />
    </button>
  );
};

export default NavUser;
