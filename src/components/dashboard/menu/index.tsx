import React from 'react';
import { UserContext, UserProps } from '../../../context/user/context';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './css/menu.module.css';
import global from '../../../assets/components/global';
import assets from '../../../assets/components/dashtask';

interface MenuProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ setLocation }: MenuProps) => {
  const { userSignOut } = React.useContext(UserContext) as UserProps;
  const navigate = useNavigate();

  const handleSignOut = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    currentTarget.setAttribute('disabled', 'disabled');
    userSignOut();
  };

  return (
    <div className={styles.menu}>
      <button className={styles.brand}>
        <img src={global.brand.brand_dashtask} />
      </button>
      <Navigation setLocation={setLocation} />
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
