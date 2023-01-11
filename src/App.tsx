import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirebaseProvider from './context/firebase/provider';
import UserProvider from './context/user/provider';
import Dashboard from './pages/dashboard';
import Debug from './pages/debug';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <UserProvider>
          <Routes>
            <Route
              path="/*"
              element={<Home />}
            />
            <Route
              path="/dashboard/*"
              element={<Dashboard />}
            />
            <Route
              path="/debug"
              element={<Debug />}
            />
          </Routes>
        </UserProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
