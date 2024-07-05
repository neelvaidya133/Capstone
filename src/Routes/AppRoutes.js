import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ShopRegister from "../Pages/NewShop/ShopRegister"

const AppRoutes = () => {
  return (
    <Routes>
      {/* This is our Starting Page */}
      <Route path="/" element= {< Dashboard />} />
      <Route path="registershop" element={<ShopRegister />} />
    </Routes>
  );
};

export default AppRoutes;