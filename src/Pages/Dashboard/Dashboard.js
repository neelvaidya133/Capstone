import React, { useState } from "react";
import "./Dashboard.css";
import Cookies from "js-cookie";
import GetPrices from "../../graphql/Query/GetPrices";
<<<<<<< HEAD
import OrderTable from "../../components/OrderTable/OrderTable";
import GetAllOrders from "../../graphql/Query/GetAllOrders";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";
=======
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import Drawer from "../../components/Drawer/Drawer";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";

import CustomerTable from "../../components/CustomerTable/CustomerTable";
import OrderTable from "../../components/OrderTable/OrderTable";

>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [tableContent, setTableContent] = useState("orders");
  const companyId = parseInt(Cookies.get("shopId"));

  const shopInfo = Cookies.get("shopName");
<<<<<<< HEAD
  const {
    allOrders,
    completedOrders,
    pendingOrders,
    orderLoading,
    orderError,
  } = GetAllOrders(companyId);

  const { customers, customerLoading, customerError } =
    GetCustomerByCompanyId(companyId);
=======


  const { customers, customerLoading, customerError } =
    GetCustomerByCompanyId(companyId);

  const companyId = parseInt(Cookies.get("shopId"));

  const { customers, customerLoading, customerError } =
    GetCustomerByCompanyId(companyId);

>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5

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
<<<<<<< HEAD
=======


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
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
            </li>

            <li onClick={() => handleSubmenuClick("Customers")}>Customers</li>

            <li>Prices</li>
<<<<<<< HEAD
          </ul>
        </nav>
        {tableContent === "orders" && (
          <OrderTable tableContent={tableContent} tableData={allOrders} />
        )}

       
=======
          </ul>
        </nav>

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} tableData={customers} />
            <li onClick={() => handleSubmenuClick("prices")}>Prices</li>
          </ul>
        </nav>
       

        {tableContent === "Customers" && (
          <CustomerTable tableContent={tableContent} tableData={customers} />
        )}
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
      </div>
    </div>
  );
};

export default Dashboard;
