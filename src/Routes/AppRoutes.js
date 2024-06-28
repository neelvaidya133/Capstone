import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* This is our Starting Page */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
