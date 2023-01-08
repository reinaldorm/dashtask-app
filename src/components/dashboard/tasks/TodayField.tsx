import React from 'react';
import FieldHeading from './FieldHeading';
import styles from './css/tasks.module.css';
import FieldList from './FieldList';
import { DataContext, DataProps } from '../../../context/data/context';

const transformDate = (date: number) => {
  return date / (1000 * 60 * 60 * 24);
};

const isSameDay = (d1: number, d2: number) => {
  const date = transformDate(d1) - transformDate(d2);
  if (date < 24 && date > 0) {
    return true;
  } else {
    return false;
  }
};

const TodayField = () => {
  const { taskData } = React.useContext(DataContext) as DataProps;
  const todayTasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (taskData.data) {
      taskData.data.tasks.filter((task) => {
        return isSameDay(task.task_final_date, Date.now());
      });
    } else {
      return null;
    }
  }, [taskData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend="Today" />
      {}
    </div>
  );
};

export default TodayField;
