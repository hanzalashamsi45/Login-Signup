import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FetchAndSaveData from './components/FetchAndSaveData';
import DashboardAgent from './components/DashboardAgent';

function App() {
  const [user, setUser] = useState(null);

  // // Check for user data in localStorage on component mount if needed
  // useEffect(() => {
  //   // You might want to handle this differently if you need to persist user state
  // }, []);

  // Function to handle logout
  const handleLogout = () => {
    setUser(null); // Clear user state
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <FetchAndSaveData/>
      <Routes>
        <Route 
          path="/login" 
          element={<Login onLogin={(userData) => setUser(userData)} />} 
        />
        <Route 
          path="/signup" 
          element={<Signup />} 
        />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/dashboardAgent"
          element={
            user ? <DashboardAgent user={user} /> : <Navigate to="/login" />
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
