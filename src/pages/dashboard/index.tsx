import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../context/user/context';
import TasksProvider from '../../context/tasks/provider';
import Tasks from '../../components/dashboard/tasks';
import Settings from '../../components/dashboard/settings';
import Account from '../../components/dashboard/account';
import Add from '../../components/dashboard/add';
import Archive from '../../components/dashboard/archive';
import Home from '../../components/dashboard/home';
import styles from './css/dashboard.module.css';
import Loading from './Loading';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext) as UserProps;

  if (!user) {
    return <Loading />;
  } else
    return (
      <TasksProvider>
        <div className={styles.dashboard}>
          <p>Always</p>
          <Routes>
            <Route
              path='tasks'
              element={<Tasks />}
            />
            <Route
              path='add'
              element={<Add />}
            />
            <Route
              path='archive'
              element={<Archive />}
            />
            <Route
              path='settings'
              element={<Settings />}
            />
            <Route
              path='account'
              element={<Account />}
            />
            <Route
              path='home'
              element={<Home />}
            />
          </Routes>
        </div>
      </TasksProvider>
    );
};

export default Dashboard;
