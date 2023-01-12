import React from 'react';
import { DashboardContext, DashboardProps } from '../../../context/dashboard/context';
import AddForm from './AddForm';
import AddPreview from './AddPreview';
import useTitle from '../../../hooks/useTitle';
import styles from './css/add.module.css';

const Add = () => {
  const { setSection } = React.useContext(DashboardContext) as DashboardProps;
  useTitle('Add');

  React.useEffect(() => {
    setSection('add');
  }, []);

  return (
    <div className={styles.add}>
      <AddForm />
      <AddPreview />
    </div>
  );
};

export default Add;
