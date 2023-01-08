import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext, UserProps } from '../../context/user/context';
import Header from '../../components/dashboard/header';
import Menu from '../../components/dashboard/menu';
import Tasks from '../../components/dashboard/tasks';
import Settings from '../../components/dashboard/settings';
import Account from '../../components/dashboard/account';
import Add from '../../components/dashboard/add';
import Archive from '../../components/dashboard/archive';
import Home from '../../components/dashboard/home';
import DataProvider from '../../context/data/provider';
import Redirect from '../../components/global/Redirect';
import Loading from './Loading';
import styles from './css/dashboard.module.css';

const Dashboard = () => {
  const { user, authenticating } = React.useContext(UserContext) as UserProps;
  const [location, setLocation] = React.useState('Welcome');

  if (authenticating) {
    return <Loading />;
  } else if (!user) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className={styles.dashboard}>
        <DataProvider user={user}>
          <Header location={location} />
          <Menu setLocation={setLocation} />
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
        </DataProvider>
      </div>
    );
  }
};

export default Dashboard;
