import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import FieldHeading from './FieldHeading';
import FieldList from './FieldList';
import Loading from '../../../pages/dashboard/Loading';
import styles from './css/tasks.module.css';
import useDate from '../../../hooks/useDate';

const TodayField = () => {
  const date = useDate();
  const { taskData } = React.useContext(DataContext) as DataProps;
  const todayTasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (taskData.data) {
      return taskData.data.tasks.filter(({ task_final_date, task_status }) => {
        return date.isSameDay(task_final_date) && !date.isOutdated(task_final_date) && task_status === 1;
      });
    } else {
      return null;
    }
  }, [taskData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend='Today' />
      {(taskData.loading && <Loading />) ||
        (todayTasks && (
          <FieldList
            date_label='Today'
            tasks={todayTasks}
          />
        ))}
    </div>
  );
};

export default TodayField;
