import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ShopRegister from "../Pages/NewShop/ShopRegister";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Signup from "../Pages/Signup/Signup";
const AppRoutes = () => {
  return (
    <Routes>
      {/* This is our Starting Page */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/registershop" element={<ShopRegister />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
