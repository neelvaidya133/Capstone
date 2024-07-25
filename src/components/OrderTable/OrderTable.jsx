import React, { useState } from "react";
import "./OrderTable.css";
import Drawer from "../Drawer/Drawer";
import Cookies from "js-cookie";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../graphql/Mutation/CreateOrder";
import { GET_ALL_ORDERS } from "../../graphql/Query/GetAllOrders";

// Defining the OrderTable function component & also, receiving the props as an argument
const OrderTable = (props) => {
  // Getting the companyId from the cookies
  const companyId = parseInt(Cookies.get("shopId"));
  // Using the useState hook, creating a state variables "selectedOrder", "detailsDrawer", "newOrderDrawer" & "formData" along with their setter functions and setting their initial values
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsDrawer, setDetailsDrawer] = useState(false);
  const [newOrderDrawer, setNewOrderDrawer] = useState(false);
  // Fetching customers by companyId with the help of GraphQL query
  const { customers } = GetCustomerByCompanyId(companyId);
  const [formData, setFormData] = useState({
    customerId: "",
    deliveryDate: "",
    shirt: "",
    pant: "",
    sherwani: "",
    suit: "",
    coat: "",
  });

  // Creating a new order with the help of GraphQL mutation by using useMutation hook
  const [createNewOrder] = useMutation(CREATE_ORDER, {
    // onCompleted callback, when mutation is completed successfully
    onCompleted: (data) => {
      console.log(data);
      setNewOrderDrawer(false);
    },
    // onError callback, when mutation is not completed successfully
    onError: (error) => {
      console.log(error);
    },
  });

  // Defining the "handleClick" function, which will be called when the user clicks on the pending order
  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(`Completing order with ID: ${id}`);
  };

  // Getting the table data from the props
  const data = props.tableData;
  console.log("data", data);

  // Event handler for opening a drawer to add new order
  const handleNewOrder = () => {
    setNewOrderDrawer(true);
  };

  // Event handler for updating the formData state 
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Event handler for new order form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creating a newOrderData object with their user input values or default values 
    const newOrderData = {
      ...formData,
      customerId: parseInt(formData.customerId),
      shirt: parseInt(formData.shirt) || 0,
      pant: parseInt(formData.pant) || 0,
      sherwani: parseInt(formData.sherwani) || 0,
      suit: parseInt(formData.suit) || 0,
      coat: parseInt(formData.coat) || 0,
      deliveryDate: formData.deliveryDate,
      companyId: companyId,
      orderStatus: "pending",
      // Setting the current date in YYYY-MM-DD format
      createdAt: new Date().toISOString().split('T')[0] 
    };
    console.log(newOrderData);

    // Executing the createNewOrder mutation in which newOrderData is passed as a variables & then refetching the orders from the database
    createNewOrder({
      variables: {
        order: newOrderData,
      },
      refetchQueries: [
        {
          query: GET_ALL_ORDERS,
          variables: { id: companyId },
        },
      ],
    });
  };
  return (
    // Content of the OrderTable component
    <>
      <div className="ordertable-content">
        {/* Button to add new order for the customer */}
        <button className="ordertable-addorder" onClick={handleNewOrder}>Add Order</button>

        {/* Table which will show all the orders */}
        {data && (
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
                  <td>{record.totalPrice}</td>
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
        )}
      </div>

      <div>
        {/* Drawer component which will display a form for adding the new order */}
        {/* Drawer component will opens or closes, based on the newOrderDrawer state */}
        <Drawer isOpen={newOrderDrawer} onClose={() => setNewOrderDrawer(false)}>
          <div>
            {/* Form for adding new order */}
            <form className="addorder-form" onSubmit={handleSubmit}>
            <h3>Add New Order</h3>
                <label for="customerId">Customer</label>
                <select
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a customer
                  </option>
                  {/* Iterating over the customers array with the help of map function to generate an option for each customer in the customers array */}
                  {customers?.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.firstName} {customer.lastName} -{" "}
                      {customer.phone}
                    </option>
                  ))}
                </select>
            
                <label for="deliveryDate">Delivery Date</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              
                <label for="shirt">Shirt</label>
                <input
                  type="number"
                  id="shirt"
                  name="shirt"
                  value={formData.shirt}
                  onChange={handleChange}
                />
              
                <label for="pant">Pant</label>
                <input
                  type="number"
                  id="pant"
                  name="pant"
                  value={formData.pant}
                  onChange={handleChange}
                />
              
                <label for="sherwani">Sherwani</label>
                <input
                  type="number"
                  id="sherwani"
                  name="sherwani"
                  value={formData.sherwani}
                  onChange={handleChange}
                />
              
                <label for="suit">Suit</label>
                <input
                  type="number"
                  id="suit"
                  name="suit"
                  value={formData.suit}
                  onChange={handleChange}
                />
              
                <label for="coat">Coat</label>
                <input
                  type="number"
                  id="coat"
                  name="coat"
                  value={formData.coat}
                  onChange={handleChange}
                />
              
              <button type="submit">Add Order</button>
            </form>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default OrderTable;
