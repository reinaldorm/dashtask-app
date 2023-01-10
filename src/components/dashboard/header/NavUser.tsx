import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import UserMenu from './UserNav';
import assets from '../../../assets/components/dashtask';
import styles from './css/header.module.css';

const NavUser = () => {
  const { userData } = React.useContext(DataContext) as DataProps;
  const [menu, setMenu] = React.useState(false);

  const handleOverOut = (config: boolean, handler: Element) => {
    if (config) {
      setMenu(true);
      handler.classList.add('active');
    } else {
      setMenu(false);
      handler.classList.remove('active');
    }
  };

  return (
    <div
      onMouseOver={({ currentTarget }) => handleOverOut(true, currentTarget)}
      onMouseOut={({ currentTarget }) => handleOverOut(false, currentTarget)}
      className={styles.userMenu}>
      <button className={styles.userTrigger}>
        {userData.data && userData.data.username}
        <img
          src={assets.icons.chevron_down}
          alt='add-task-icon'
        />
      </button>
      {menu && <UserMenu />}
    </div>
  );
};

export default NavUser;
