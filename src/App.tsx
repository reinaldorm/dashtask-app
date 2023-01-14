import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './context/user/provider';
import Dashboard from './pages/dashboard';
import Debug from './pages/debug';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route
            path='/*'
            element={<Home />}
          />
          <Route
            path='/dashboard/*'
            element={<Dashboard />}
          />
          <Route
            path='/debug'
            element={<Debug />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
