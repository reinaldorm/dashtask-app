import React from 'react';
import { UserContext, UserProps } from '../../../context/user/context';
import Navigation from './Navigation';
import styles from './css/menu.module.css';
import global from '../../../assets/components/global';
import assets from '../../../assets/components/dashtask';

const Menu = () => {
  const { userSignOut } = React.useContext(UserContext) as UserProps;

  const handleSignOut = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    currentTarget.setAttribute('disabled', 'disabled');
    userSignOut();
  };

  return (
    <div className={styles.menu}>
      <button className={styles.brand}>
        <img src={global.brand.brand_dashtask} />
      </button>
      <Navigation />
      <button
        className={styles.logout}
        onClick={handleSignOut}>
        <img src={assets.icons.power} />
        Logout
      </button>
    </div>
  );
};

export default Menu;
