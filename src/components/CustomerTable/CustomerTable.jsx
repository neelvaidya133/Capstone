import React from "react";

const CustomerTable = (props) => {
  const handleMeasurement = (id) => {
    console.log(`Viewing measurements for customer ID: ${id}`);
  };

  const customersData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak Ave",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
    },
  ];
  return (
    <>
      <main className="content">
        <h2>{props.tableContent} List</h2>
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
