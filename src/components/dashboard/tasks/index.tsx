import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import styles from './css/tasks.module.css';

const Tasks = () => {
  const { taskData } = React.useContext(DataContext) as DataProps;

  React.useEffect(() => {
    console.log(taskData.data);
  }, [taskData.data]);

  return (
    <div className={styles.tasks}>
      <button onClick={() => taskData.getData()}>Update Task</button>
    </div>
  );
};

export default Tasks;
