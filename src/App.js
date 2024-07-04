import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Signup from "./Pages/Signup/Signup";
import OrderTable from "./components/OrderTable/OrderTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ordertable" element={<OrderTable />} />
      </Routes>
    </Router>
  );
};

export default App;
