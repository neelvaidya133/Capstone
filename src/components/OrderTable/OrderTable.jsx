import React, { useState } from "react";

const OrderTable = (props) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsDrawer, setDetailsDrawer] = useState(false);
  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(`Completing order with ID: ${id}`);
    // Handle order completion logic here
  };

  const data = [
    {
      id: 1,
      customerByCustomerId: {
        firstName: "John",
        lastName: "Doe",
      },
      deliveryDate: "2024-07-02",
      totalCounts: 10,
      totalPrice: 100.0,
      orderStatus: "pending",
    },
    {
      id: 2,
      customerByCustomerId: {
        firstName: "Jane",
        lastName: "Smith",
      },
      deliveryDate: "2024-07-03",
      totalCounts: 20,
      totalPrice: 200.0,
      orderStatus: "completed",
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
              <th>Delivery Date</th>
              <th>Total Count</th>
              <th>Total Amount</th>
              <th>Order Details</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr key={record.id}>
                <td>{record.customerByCustomerId.firstName}</td>
                <td>{record.customerByCustomerId.lastName}</td>
                <td>{record.deliveryDate}</td>
                <td>{record.totalCounts}</td>
                <td>{record.totalPrice}</td>
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
                      console.log("record", record.id);
                      setSelectedOrder(record);
                      setDetailsDrawer(true);
                    }}
                  >
                    Details
                  </button>
                </td>
                <td>
                  {record.orderStatus === "pending" ? (
                    <a
                      onClick={(e) => handleClick(e, record.id)}
                      style={{
                        color: "#1677ff",
                        cursor: "pointer",
                      }}
                    >
                      Pending
                    </a>
                  ) : (
                    <p>Completed</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default OrderTable;
