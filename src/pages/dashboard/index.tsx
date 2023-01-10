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
import Transition from './Transition';
import useTitle from '../../hooks/useTitle';
import styles from './css/dashboard.module.css';

const Dashboard = () => {
  const { user, authenticating } = React.useContext(UserContext) as UserProps;
  const [header, setHeader] = React.useState<1 | 2>(1);
  useTitle('Dashboard');

  if (authenticating) {
    return <Loading />;
  } else if (!user) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles.dashboard}>
        <DataProvider user={user}>
          <Header header={header} />
          <Menu />
          <Transition message="Hello" />
          <Routes>
            <Route
              path="tasks"
              element={<Tasks setHeader={setHeader} />}
            />
            <Route
              path="add"
              element={<Add setHeader={setHeader} />}
            />
            <Route
              path="archive"
              element={<Archive setHeader={setHeader} />}
            />
            <Route
              path="settings"
              element={<Settings setHeader={setHeader} />}
            />
            <Route
              path="account"
              element={<Account setHeader={setHeader} />}
            />
            <Route
              path="home"
              element={<Home setHeader={setHeader} />}
            />
          </Routes>
        </DataProvider>
      </div>
    );
  }
};

export default Dashboard;
