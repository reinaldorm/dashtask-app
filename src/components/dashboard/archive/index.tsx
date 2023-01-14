import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import useTitle from '../../../hooks/useTitle';
import TaskField from '../tasks/TaskField';
import styles from './css/archive.module.css';

const Archive = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Archive');

  React.useEffect(() => {
    setSection('archive');
  }, []);

  return (
    <div className={styles.archive}>
      <TaskField
        direction='column'
        from='deleted'
        checker='isBypassed'
        legend='Deleted'></TaskField>
      <TaskField
        direction='column'
        from='archived'
        checker='isBypassed'
        legend='Archived'></TaskField>
    </div>
  );
};

export default Archive;
