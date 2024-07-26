import React, { useState } from "react";
import "./Dashboard.css";
import Cookies from "js-cookie";
import GetPrices from "../../graphql/Query/GetPrices";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
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
