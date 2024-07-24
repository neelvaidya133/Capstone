import React, { useState } from "react";
import "./OrderTable.css";
import Drawer from "../Drawer/Drawer";

// Defining the OrderTable function component & also, receiving the props as an argument
const OrderTable = (props) => {
  // Using the useState hook, creating a state variables "selectedOrder" & "detailsDrawer" along with their setter functions and setting their initial values
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsDrawer, setDetailsDrawer] = useState(false);
  const [newOrderDrawer, setNewOrderDrawer] = useState(false);

  
  // Defining the "handleClick" function, which will be called when the user clicks on the pending order
  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(`Completing order with ID: ${id}`);
  };

  // Creating an array of objects called as "Data", which contains the dummy data for the Order Table 
  const data = [
    {
      id: 1,
      customerByCustomerId: {
        firstName: "Deep",
        lastName: "Patel",
      },
      deliveryDate: "2024-07-10",
      totalCounts: 8,
      totalPrice: 110.0,
      orderStatus: "completed",
    },
    {
      id: 2,
      customerByCustomerId: {
        firstName: "Neel",
        lastName: "Vaidya",
      },
      deliveryDate: "2024-07-15",
      totalCounts: 15,
      totalPrice: 180.0,
      orderStatus: "completed",
    },
    {
      id: 3,
      customerByCustomerId: {
        firstName: "Viren",
        lastName: "Singh",
      },
      deliveryDate: "2024-08-06",
      totalCounts: 12,
      totalPrice: 280.0,
      orderStatus: "pending",
    },
    {
      id: 4,
      customerByCustomerId: {
        firstName: "Rahul",
        lastName: "Patel",
      },
      deliveryDate: "2024-08-27",
      totalCounts: 17,
      totalPrice: 140.0,
      orderStatus: "pending",
    },
  ];


  const handleNewOrder = () =>{
    setNewOrderDrawer(true)
  }
  return (
    // Content of the OrderTable component
    <>
    <div className="ordertable-content">
      {/* Button to add new order for the customer */}
      <button className="ordertable-addorder" onClick={handleNewOrder}>Add Order</button>

      {/* Table which will show all the orders */}
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
          {/* Iterating over the data array with the help of map function to generate a table row for each item in the data array */}
          {data.map((record) => (
            <tr key={record.id}>
              <td>{record.customerByCustomerId.firstName}</td>
              <td>{record.customerByCustomerId.lastName}</td>
              <td>{record.deliveryDate}</td>
              <td>{record.totalCounts}</td>
              <td>$ {record.totalPrice}</td>
              <td>
                {/* When a user clicks on this link, then the Order details is been displayed in the details drawer by selecting the order */}
                <a href=" " className="ordertable-details"
                  onClick={() => {
                    console.log("record", record.id);
                    setSelectedOrder(record);
                    setDetailsDrawer(true);
                  }}
                >
                  Details
                </a>
              </td>
              <td>
                {/* If order is pending */}
                {record.orderStatus === "pending" ? (
                  /* When a user clicks on the pending order link then handleClick function will be called */
                  <a href=" " className="ordertable-pending" onClick={(e) => handleClick(e, record.id)}>
                    Pending
                  </a>
                ) : (
                  /* If order is Completed */
                  <p style={{margin: 0}}>Completed</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Drawer isOpen={newOrderDrawer} onClose={()=> setNewOrderDrawer(false)}>
    <div>
            <h3>Add New Order</h3>
            <form>
              <label>First Name:</label>
              <input type="text" />
              <label>Last Name:</label>
              <input type="text" />
              <label>Delivery Date:</label>
              <input type="date" />
              <label>Total Count:</label>
              <input type="number" />
              <label>Total Amount:</label>
              <input type="number" />
              <label>Order Status:</label>
              <select>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <button>Add</button>
            </form>
          </div>




    </Drawer>
    </>
  );
};

export default OrderTable;
