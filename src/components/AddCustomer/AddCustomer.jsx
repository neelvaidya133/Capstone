import React from "react";

const AddCustomer = () => {
  return (
    <>
      <h2>Add Customer</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddCustomer;
