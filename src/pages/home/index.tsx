import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/home/footer';
import Header from '../../components/home/header';
import Landing from '../../components/home/landing';
import SignIn from '../../components/home/signin';
import SignUp from '../../components/home/signup';
import styles from './css/home.module.css';

const Home = () => {
  const [section, setSection] = React.useState(0);

  return (
    <div className={styles.home}>
      <Header />
      <Routes>
        <Route
          path='landing'
          element={<Landing />}
        />
        <Route
          path='login'
          element={<SignIn />}
        />
        <Route
          path='register'
          element={<SignUp />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
