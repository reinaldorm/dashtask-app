import React from 'react';
import * as uuid from 'uuid';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import { FirebaseContext, FirebaseProps } from '../../../context/firebase/context';
import { DataContext, DataProps } from '../../../context/data/context';
import AddInputs from './AddInputs';
import AddPreview from './AddPreview';
import Loading from '../tasks/Loading';
import useCheckDate from '../../../hooks/useCheckDate';
import useTitle from '../../../hooks/useTitle';
import useTask from '../../../hooks/useTask';
import styles from './css/add.module.css';

const Add = () => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { user, userData, taskData } = React.useContext(DataContext) as DataProps;
  const { create } = useTask(db, user.uid);
  const { isOutOfDate } = useCheckDate();
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  const [loading, setLoading] = React.useState(false);

  const [task, setTask] = React.useState<NewTaskInterface>({
    name: 'Task Name',
    level: 1,
    date: Date.now(),
    tags: ['misc'],
  });
  useTitle('Add');

  const createTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (task.name && task.level && !isOutOfDate(task.date) && task.tags.length <= 3 && task.tags.length > 0) {
      try {
        await create({
          task_name: task.name,
          task_initial_date: Date.now(),
          task_final_date: task.date,
          task_custom_tags: [],
          task_id: uuid.v4(),
          task_level: task.level,
          task_status: 1,
          task_tags: task.tags,
        });
        await userData.getData();
        await taskData.getData();
      } catch (e) {
        console.log('Something went wrong:', e);
      }
    } else {
      console.log('Something went wrong with fields.');
    }
    setLoading(false);
  };

  React.useEffect(() => {
    setSection('add');
  }, []);

  if (loading) {
    return <Loading />;
  } else
    return (
      <form
        onSubmit={createTask}
        className={styles.add}>
        <AddInputs
          setTask={setTask}
          task={task}
        />
        <AddPreview task={task} />
      </form>
    );
};

export default Add;
