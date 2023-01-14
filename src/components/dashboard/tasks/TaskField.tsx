import React from 'react';
import { DataContext, DataProps } from '../../../context/data/context';
import useCheckDate, { CheckDate } from '../../../hooks/useCheckDate';
import FieldHeading from './FieldHeading';
import FieldList from './FieldList';
import Loading from './Loading';
import styles from './css/tasks.module.css';

interface TaskFieldProps {
  checker: keyof CheckDate;
  legend: string;
  date_label?: string;
}

const TaskField = ({ checker, legend, date_label }: TaskFieldProps) => {
  const { userData } = React.useContext(DataContext) as DataProps;
  const checkDate = useCheckDate();

  const tasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (userData.data) {
      return userData.data.tasks.active.filter(({ final_date, status }) => {
        return checkDate[checker](final_date) && status === 1;
      });
    } else {
      return null;
    }
  }, [userData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend={legend} />
      {(userData.loading && <Loading />) ||
        (tasks && (
          <FieldList
            date_label={date_label}
            tasks={tasks}
          />
        ))}
    </div>
  );
};

export default TaskField;
