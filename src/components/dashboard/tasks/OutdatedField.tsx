import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import FieldHeading from './FieldHeading';
import FieldList from './FieldList';
import Loading from '../../../pages/dashboard/Loading';
import styles from './css/tasks.module.css';
import useDate from '../../../hooks/useDate';

const OutdatedField = () => {
  const date = useDate();
  const { taskData } = React.useContext(DataContext) as DataProps;
  const outdatedTasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (taskData.data) {
      return taskData.data.tasks.filter(({ task_final_date }) => {
        return date.isOutdated(task_final_date);
      });
    } else {
      return null;
    }
  }, [taskData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend='Outdated' />
      {(taskData.loading && <Loading />) ||
        (outdatedTasks && (
          <FieldList
            date_label={undefined}
            tasks={outdatedTasks}
          />
        ))}
    </div>
  );
};

export default OutdatedField;
