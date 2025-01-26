import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userProfile = localStorage.getItem("profile");
    setIsAuthenticated(!!userProfile);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Always redirect the root route to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Protect the authenticated routes */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/notes" element={isAuthenticated ? <Notes /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
