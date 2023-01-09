import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import FieldHeading from './FieldHeading';
import FieldList from './FieldList';
import Loading from '../../../pages/dashboard/Loading';
import styles from './css/tasks.module.css';
import useDate from '../../../hooks/useDate';

const TomorrowField = () => {
  const date = useDate();
  const { taskData } = React.useContext(DataContext) as DataProps;
  const tomorrowTasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (taskData.data) {
      return taskData.data.tasks.filter(({ task_final_date, task_status }) => {
        return date.isNextDay(task_final_date) && !date.isOutdated(task_final_date) && task_status === 1;
      });
    } else {
      return null;
    }
  }, [taskData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend='Tomorrow' />
      {(taskData.loading && <Loading />) ||
        (tomorrowTasks && (
          <FieldList
            date_label='Tomorrow'
            tasks={tomorrowTasks}
          />
        ))}
    </div>
  );
};

export default TomorrowField;
