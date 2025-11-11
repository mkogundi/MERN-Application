import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Landing } from './pages/Landing';
import { Login, Register } from './pages/Auth';
import { Movies } from './pages/Movies';
import { Admin } from './pages/Admin';
import Navbar from './components/Navbar';
import './App.css';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/movies" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admin" element={user?.isAdmin ? <Admin /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
