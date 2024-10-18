import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfileSetup from './components/ProfileSetup';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/dashoard" element={<Dashboard />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile_setup" element={<ProfileSetup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
    
    </Router>
  );
}

export default App;
