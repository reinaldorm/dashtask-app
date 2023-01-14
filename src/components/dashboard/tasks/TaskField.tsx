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
  from: keyof UserTaskInterface;
  direction?: 'row' | 'column';
}

const TaskField = ({ checker, legend, date_label, from, direction = 'row' }: TaskFieldProps) => {
  const { taskData } = React.useContext(DataContext) as DataProps;
  const checkDate = useCheckDate();

  const tasks = React.useMemo<Array<TaskInterface> | null>(() => {
    if (taskData.data) {
      return taskData.data[from].filter(({ task_final_date }) => {
        return checkDate[checker](task_final_date);
      });
    } else {
      return null;
    }
  }, [taskData.loading]);

  return (
    <div className={styles.taskField}>
      <FieldHeading legend={legend} />
      {(taskData.loading && <Loading />) ||
        (tasks && (
          <FieldList
            direction={direction}
            date_label={date_label}
            tasks={tasks}
          />
        ))}
    </div>
  );
};

export default TaskField;
