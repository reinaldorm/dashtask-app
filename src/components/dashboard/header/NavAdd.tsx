import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/header.module.css';
import assets from '../../../assets/components/dashtask';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';

const NavAdd = () => {
  const { section } = React.useContext(DashboardContext) as DashboardProps;
  const [state, setState] = React.useState<1 | 2>(1);

  React.useEffect(() => {
    if (section === 'add' || section === 'account') {
      setState(2);
    } else {
      setState(1);
    }
  }, [section]);

  return (
    <NavLink
      to={state === 1 ? 'add' : 'tasks'}
      className={`${styles.addTask} ${state === 2 && styles.addTaskDark}`}>
      <img
        src={assets.icons.add_circle}
        alt='add-task-icon'
      />
      {state === 1 && 'Add Task'}
    </NavLink>
  );
};

export default NavAdd;
