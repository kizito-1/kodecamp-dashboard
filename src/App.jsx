import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Add from "./Pages/Add.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { ProtectedRoute } from "./Context/ProtectedRoute.jsx";
import Personal from "./Pages/Personal.jsx";
import Manual from "./Pages/Manual.jsx";
import Success from "./Pages/Success.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/personal-info" element={<Personal />} />
        <Route path="/register/add-address" element={<Add />} />
        <Route path="/register/success" element={<Success />} />
        <Route path="/register/add-manually" element={<Manual />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
