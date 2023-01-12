import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import AddForm from './AddForm';
import AddPreview from './AddPreview';
import useTitle from '../../../hooks/useTitle';
import styles from './css/add.module.css';
import useTask from '../../../hooks/useTask';
import { FirebaseContext, FirebaseProps } from '../../../context/firebase/context';
import { DataContext, DataProps } from '../../../context/data/context';
import Loading from '../tasks/Loading';

const Add = () => {
  const { user } = React.useContext(DataContext) as DataProps;
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { createTask, loading } = useTask(db, user.uid);
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  const [task, setTask] = React.useState<NewTaskInterface>({
    name: 'Task Name',
    level: 1,
    date: Date.now(),
    tags: ['misc'],
  });
  useTitle('Add');

  React.useEffect(() => {
    setSection('add');
  }, []);

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className={styles.add}>
        <AddForm
          setTask={setTask}
          task={task}
        />
        <AddPreview task={task} />
      </div>
    );
};

export default Add;
