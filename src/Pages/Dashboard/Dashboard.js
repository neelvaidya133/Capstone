import React, { useState } from "react";
import "./Dashboard.css";

import Cookies from "js-cookie";
import GetPrices from "../../graphql/Query/GetPrices";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import Drawer from "../../components/Drawer/Drawer";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";

import CustomerTable from "../../components/CustomerTable/CustomerTable";
import OrderTable from "../../components/OrderTable/OrderTable";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [tableContent, setTableContent] = useState("orders");

  const companyId = parseInt(Cookies.get("shopId"));

  const { customers, customerLoading, customerError } =
    GetCustomerByCompanyId(companyId);


  const data = [
    {
      id: 1,
      customerByCustomerId: {
        firstName: "Viren",
        lastName: "Owhal",
      },
      deliveryDate: "2024-08-14",
      totalCounts: 10,
      totalPrice: 100.0,
      orderStatus: "pending",
    },
    {
      id: 2,
      customerByCustomerId: {
        firstName: "Roy",
        lastName: "Pauul",
      },
      deliveryDate: "2024-08-03",
      totalCounts: 20,
      totalPrice: 200.0,
      orderStatus: "completed",
    },
  ];
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
    setTableContent(submenu);
  };
  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(`Completing order with ID: ${id}`);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">Shop Name</div>
        <button className="logout">Logout</button>
      </header>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <div onClick={() => handleSubmenuClick("orders")}>Orders</div>
              <div onClick={() => handleMenuClick("orders")}>Orders</div>
              {activeMenu === "orders" && (
                <ul className="submenu">
                  <li onClick={() => handleSubmenuClick("Pending")}>Pending</li>
                  <li onClick={() => handleSubmenuClick("Completed")}>
                    Completed
                  </li>
                  <li onClick={() => handleSubmenuClick("All")}>All Orders</li>
                </ul>
              )}
            </li>

            <li onClick={() => handleSubmenuClick("Customers")}>Customers</li>

            <li>Prices</li>
          </ul>
        </nav>

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} tableData={customers} />
            <li onClick={() => handleSubmenuClick("prices")}>Prices</li>
          </ul>
        </nav>
        {tableContent === "orders" && (
          <OrderTable tableContent={tableContent} handleClick={handleClick} />
        )}

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
