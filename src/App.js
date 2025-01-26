import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Changed to HashRouter
import Home from "./Home";
import Notes from "./Notes";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    const userProfile = localStorage.getItem("profile");
    setIsAuthenticated(!!userProfile);
  }, []);

  return (
    <Router basename="/CSIA"> {/* HashRouter for GitHub Pages compatibility */}
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Protected routes */}
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/notes" 
          element={isAuthenticated ? <Notes /> : <Navigate to="/login" />} 
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch-all redirect (optional) */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;