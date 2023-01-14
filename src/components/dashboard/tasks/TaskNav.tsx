import React from 'react';
import assets from '../../../assets/components/dashtask';
import { DataContext, DataProps } from '../../../context/data/context';
import { FirebaseContext, FirebaseProps } from '../../../context/firebase/context';
import useTask from '../../../hooks/useTask';
import styles from './css/tasks.module.css';

interface TaskNavProps {
  task: TaskInterface;
}

const TaskNav = ({ task }: TaskNavProps) => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { user, userData } = React.useContext(DataContext) as DataProps;
  const { move, loading } = useTask(db, user.uid);

  const handleMove = async (to: keyof UserTasksInterface) => {
    try {
      await move(task, 'active', to);
      await userData.getData();
      console.log('task deleted');
    } catch (e) {
      console.log('Something went wrong: ', e);
    }
  };

  return (
    <div className={styles.taskNav}>
      <button
        onClick={() => {}}
        disabled={loading}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.check}
          alt="user-icon"
        />{' '}
        Complete Task
      </button>
      <button
        onClick={() => {}}
        disabled={loading}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.edit}
          alt="settings-icon"
        />{' '}
        Edit Task
      </button>
      <button
        onClick={() => handleMove('deleted')}
        disabled={loading}
        className={styles.taskNavLink}>
        <img
          src={assets.icons.close}
          alt="settings-icon"
        />{' '}
        Delete Task
      </button>
    </div>
  );
};

export default TaskNav;
