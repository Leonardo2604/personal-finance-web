import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/Login';
import MainPage from './pages/Main';
import DashboardPage from './pages/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
