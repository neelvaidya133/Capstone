import React, { useState } from "react";
import Drawer from "../Drawer/Drawer";
import CustomerMeasurements from "../CustomerMeasurments/CustomerMeasurements";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { GET_CustomerByCompanyId } from "../../graphql/Query/GetAllCustomer";
const CustomerTable = (props) => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });
  const companyId = parseInt(Cookies.get("shopId"));
  const [newCustomerDrawer, setNewCustomerDrawer] = useState(false);
  const [customerMeasurementDrawer, setCustomerMeasurementDrawer] =
    useState(false);
  const customersData = props.tableData;
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleMeasurement = (id) => {
    setSelectedCustomer(id);
    setCustomerMeasurementDrawer(true);
  };

  const handleNewCustomer = () => {
    setNewCustomerDrawer(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddCustomer = (e) => {
    e.preventDefault();
    console.log("customer", customer);
  };

  return (
    <>
      <main className="content">
        <button onClick={handleNewCustomer}> Add Customer</button>
        {customersData && (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Measurements</th>
              </tr>
            </thead>
            <tbody>
              {customersData.map((record) => (
                <tr key={record.id}>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.address}</td>
                  <td>{record.phone}</td>
                  <td>{record.email}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "#1677ff",
                        border: "none",
                        cursor: "pointer",
                        transition: "color 0.3s",
                      }}
                      onClick={() => {
                        handleMeasurement(record.id);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <div></div>

      <div>
        <Drawer
          isOpen={customerMeasurementDrawer}
          onClose={() => setCustomerMeasurementDrawer(false)}
        >
          <div>
            <CustomerMeasurements
              customerId={selectedCustomer}
              clothType="shirt"
            />
          </div>
        </Drawer>
      </div>

import React from "react";
import "./CustomerTable.css";

const CustomerTable = (props) => {
  const handleMeasurement = (id) => {
    console.log(`Viewing measurements for customer ID: ${id}`);
  };

  const customersData = [
    {
      id: 1,
      firstName: "Neel",
      lastName: "Vaidya",
      address: "299 Doon Valley",
      phone: "587-989-6524",
      email: "neelvaidya@conestogsc.on.ca",
    },
    {
      id: 2,
      firstName: "Viren",
      lastName: "Owhal",
      address: "275 larch St",
      phone: "778-962-1257",
      email: "vowhal@conestogac.on.ca",
    },
    {
      id: 3,
      firstName: "Deep",
      lastName: "B",
      address: "1121 Kitchener",
      phone: "554-785-6627",
      email: "deep@conestogac.on.ca",
    },
  ];
  return (
    <>
      <main style={{padding: '10px 30px'}}>
        <button style={{margin: '20px 0',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',}}
    > Add Customer</button>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Measurements</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((record) => (
              <tr key={record.id}>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>{record.address}</td>
                <td>{record.phone}</td>
                <td>{record.email}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "#1677ff",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s",
                    }}
                    onClick={() => {
                      handleMeasurement(record.id);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default CustomerTable;
