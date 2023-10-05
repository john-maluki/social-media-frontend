import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

const AuthRoutes = ({ handleLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default AuthRoutes;
