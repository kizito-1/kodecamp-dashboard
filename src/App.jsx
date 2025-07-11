import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { ProtectedRoute } from "./Context/ProtectedRoute.jsx";
import Personal from "./Pages/Personal.jsx"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/personal-info" element={<Personal />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } />
      </Routes>
    </>
  );
};

export default App;