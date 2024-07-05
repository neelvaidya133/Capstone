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
