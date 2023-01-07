import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../context/user/context';
import Header from '../../components/dashboard/header';
import Menu from '../../components/dashboard/menu';
import Tasks from '../../components/dashboard/tasks';
import Settings from '../../components/dashboard/settings';
import Account from '../../components/dashboard/account';
import Add from '../../components/dashboard/add';
import Archive from '../../components/dashboard/archive';
import Home from '../../components/dashboard/home';
import Loading from './Loading';
import styles from './css/dashboard.module.css';
import DataProvider from '../../context/data/provider';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext) as UserProps;
  const [location, setLocation] = React.useState('Welcome');

  React.useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  if (user === 1 || user === null) {
    return <Loading />;
  } else
    return (
      <div className={styles.dashboard}>
        <DataProvider user={user}>
          <Header location={location} />
          <Menu setLocation={setLocation} />
          <Routes>
            <Route
              path="tasks"
              element={<Tasks />}
            />
            <Route
              path="add"
              element={<Add />}
            />
            <Route
              path="archive"
              element={<Archive />}
            />
            <Route
              path="settings"
              element={<Settings />}
            />
            <Route
              path="account"
              element={<Account />}
            />
            <Route
              path="home"
              element={<Home />}
            />
          </Routes>
        </DataProvider>
      </div>
    );
};

export default Dashboard;
