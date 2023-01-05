import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirebaseProvider from './context/contexts/firebase/provider';
import TasksProvider from './context/contexts/tasks/provider';
import UserProvider from './context/contexts/user/provider';
import StoreProvider from './context/provider';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <UserProvider>
          <TasksProvider>
            <StoreProvider>
              <Routes>
                <Route
                  path='/*'
                  element={<Home />}
                />
              </Routes>
            </StoreProvider>
          </TasksProvider>
        </UserProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
