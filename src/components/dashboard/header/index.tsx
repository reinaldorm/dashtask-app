import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import styles from './css/header.module.css';

interface HeaderProps {
  location: string;
}

const Header = ({ location }: HeaderProps) => {
  const { userData } = React.useContext(DataContext) as DataProps;

  React.useEffect(() => {
    console.log(userData.data);
  }, [userData.data]);

  return (
    <div className={styles.header}>
      <h1 className={styles.legend}>{location}</h1>
    </div>
  );
};

export default Header;
