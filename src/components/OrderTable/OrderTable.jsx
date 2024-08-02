import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
import Drawer from "../Drawer/Drawer";
import Cookies from "js-cookie";
import GetCustomerByCompanyId from "../../graphql/Query/GetAllCustomer";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../graphql/Mutation/CreateOrder";
import { GET_ALL_ORDERS } from "../../graphql/Query/GetAllOrders";
<<<<<<< HEAD
const OrderTable = (props) => {
  const companyId = parseInt(Cookies.get("shopId"));
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsDrawer, setDetailsDrawer] = useState(false);
  const [newOrderDrawer, setNewOrderDrawer] = useState(false);
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

  const [createNewOrder] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      console.log(data);
      setNewOrderDrawer(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(`Completing order with ID: ${id}`);
    // Handle order completion logic here
  };

  const data = props.tableData;
  console.log("data", data);
  const handleNewOrder = () => {
    setNewOrderDrawer(true);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
      createdAt: new Date().toLocaleDateString(),
    };
    console.log(newOrderData);
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
    <>
      <main className="content">
        <button onClick={handleNewOrder}>Add Order</button>
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
        )}
      </main>

      <div></div>
      <div>
        <Drawer
          isOpen={newOrderDrawer}
          onClose={() => setNewOrderDrawer(false)}
        >
          <div>
            <h3>Add New Order</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <label htmlFor="customerId">Customer</label>
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
                  {customers?.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.firstName} {customer.lastName} -{" "}
                      {customer.phone}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="shirt">Shirt</label>
                <input
                  type="number"
                  id="shirt"
                  name="shirt"
                  value={formData.shirt}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="pant">Pant</label>
                <input
                  type="number"
                  id="pant"
                  name="pant"
                  value={formData.pant}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="sherwani">Sherwani</label>
                <input
                  type="number"
                  id="sherwani"
                  name="sherwani"
                  value={formData.sherwani}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="suit">Suit</label>
                <input
                  type="number"
                  id="suit"
                  name="suit"
                  value={formData.suit}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="coat">Coat</label>
                <input
                  type="number"
                  id="coat"
                  name="coat"
                  value={formData.coat}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Add Order</button>
            </form>
          </div>
        </Drawer>
      </div>
    </>
=======
import "./OrderTable.css";

// Defining the OrderTable function component & also, receiving the props as an argument
=======
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
const OrderTable = (props) => {
  const companyId = parseInt(Cookies.get("shopId"));
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsDrawer, setDetailsDrawer] = useState(false);
  const [newOrderDrawer, setNewOrderDrawer] = useState(false);
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

  const [createNewOrder] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      setNewOrderDrawer(false);
    },
    onError: (error) => {},
  });

  const handleClick = (e, id) => {
    e.preventDefault();
    // Handle order completion logic here
  };

  const data = props.tableData;
  const handleNewOrder = () => {
    setNewOrderDrawer(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
      createdAt: new Date().toLocaleDateString(),
    };
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
    <>
      <main className="content">
        <button onClick={handleNewOrder}>Add Order</button>
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
        )}
      </main>

      <div></div>
      <div>
        <Drawer
          isOpen={newOrderDrawer}
          onClose={() => setNewOrderDrawer(false)}
        >
          <div>
            <h3>Add New Order</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <label htmlFor="customerId">Customer</label>
                <select
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  required
                >
<<<<<<< HEAD
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
>>>>>>> cc70347177e9e2c3be8ec4b2a7f3eceb6cb7166a
=======
                  <option value="" disabled>
                    Select a customer
                  </option>
                  {customers?.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.firstName} {customer.lastName} -{" "}
                      {customer.phone}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="shirt">Shirt</label>
                <input
                  type="number"
                  id="shirt"
                  name="shirt"
                  value={formData.shirt}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="pant">Pant</label>
                <input
                  type="number"
                  id="pant"
                  name="pant"
                  value={formData.pant}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="sherwani">Sherwani</label>
                <input
                  type="number"
                  id="sherwani"
                  name="sherwani"
                  value={formData.sherwani}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="suit">Suit</label>
                <input
                  type="number"
                  id="suit"
                  name="suit"
                  value={formData.suit}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="coat">Coat</label>
                <input
                  type="number"
                  id="coat"
                  name="coat"
                  value={formData.coat}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Add Order</button>
            </form>
          </div>
        </Drawer>
      </div>
    </>
>>>>>>> 77f05dfa66da2d33b144c84cd7c062a2354fdfc6
  );
};

export default OrderTable;
