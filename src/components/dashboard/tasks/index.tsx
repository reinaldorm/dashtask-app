import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/tasks.module.css';
import TaskList from './TaskList';

const Tasks = () => {
  const { taskData } = React.useContext(DataContext) as DataProps;
  useTitle('Tasks');

  React.useEffect(() => {
    taskData.getData();
  }, []);

  return (
    <div className={styles.tasks}>
      <TaskList />
    </div>
  );
};

export default Tasks;
