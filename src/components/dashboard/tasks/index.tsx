import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import TaskList from './TaskList';
import useTitle from '../../../hooks/useTitle';
import styles from './css/tasks.module.css';

const Tasks = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  const { userData } = React.useContext(DataContext) as DataProps;
  useTitle('Tasks');

  React.useEffect(() => {
    if (userData.data === null) {
      userData.getData();
    }
    setSection('tasks');
  }, []);

  return (
    <div className={styles.tasks}>
      <TaskList />
    </div>
  );
};

export default Tasks;
