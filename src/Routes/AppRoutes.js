import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Pages/SignUp/Signup";
<<<<<<< HEAD
=======
import ShopRegister from "../Pages/NewShop/ShopRegister";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
import ShopRegister from "../Pages/NewShop/ShopRegister";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
=======
      {/* This is our Starting Page */}

>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registerShop" element={<ShopRegister />} />
      </Route>
<<<<<<< HEAD
=======

>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
    </Routes>
  );
};

export default AppRoutes;

