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
    </>
  );
};

export default CustomerTable;
