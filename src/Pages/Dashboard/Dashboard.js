import React, { useState } from "react";
import "./Dashboard.css";
import Cookies from "js-cookie";
import GetPrices from "../../graphql/Query/GetPrices";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
<<<<<<< HEAD
import OrderTable from "../../components/OrderTable/OrderTable";
import Drawer from "../../components/Drawer/Drawer";
import GetAllOrders from "../../graphql/Query/GetAllOrders";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";

import CustomerTable from "../../components/CustomerTable/CustomerTable";
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
import OrderTable from "../../components/OrderTable/OrderTable";
import Drawer from "../../components/Drawer/Drawer";
import GetAllOrders from "../../graphql/Query/GetAllOrders";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [tableContent, setTableContent] = useState("orders");
  const companyId = parseInt(Cookies.get("shopId"));

  const shopInfo = Cookies.get("shopName");
  const {
    allOrders,
    completedOrders,
    pendingOrders,
    orderLoading,
    orderError,
  } = GetAllOrders(companyId);

  const { customers, customerLoading, customerError } =
    GetCustomerByCompanyId(companyId);

<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> cc70347177e9e2c3be8ec4b2a7f3eceb6cb7166a
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
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
            </li>

            <li onClick={() => handleSubmenuClick("Customers")}>Customers</li>

            <li>Prices</li>
          </ul>
        </nav>
<<<<<<< HEAD
        {tableContent === "orders" && (
          <OrderTable tableContent={tableContent} tableData={allOrders} />
        )}

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} tableData={customers} />
            <li onClick={() => handleSubmenuClick("prices")}>Prices</li>
          </ul>
        </nav>
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
        {tableContent === "orders" && (
          <OrderTable tableContent={tableContent} tableData={allOrders} />
        )}

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} tableData={customers} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
