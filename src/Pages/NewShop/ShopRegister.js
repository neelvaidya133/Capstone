import React from "react";
import "./ShopRegister.css";
const ShopRegister = () => {



  const hasCompany = null; // setting hasCompany to null for testing purposes to check Regsitration form
  // set hasCompany to true if the user has already registered a shop //////


  // code when the user has a shop or has alrerady registered
  if (hasCompany) {
    return (
      <div className="newshop-container">
        <div className="newshop-head">
          <h2>You have already registered a shop</h2>
        </div>

        <div className="newshop-registerform">
          <label for="shopname">Select shop</label>
          <select id="shopname" name="shopname" required>
            <option value="shop1">Shop 1</option>
            <option value="shop2">Shop 2</option>
            <option value="shop3">Shop 3</option>
            <option value="shop4">Shop 4</option>
          </select>

          <button type="submit">Continue</button>
        </div>
      </div>
    );
  }


  // if the user does have a shop this is the page user gets 
  return (
    <div className="shopregister-container">
      <div className="shopregister-head">
        <h2>Register Your Shop Here</h2>
      </div>

      <div className="shop-registerform">
        <label for="shopname">Shop Name</label>

        <input type="text" id="shopname" name="shopname" required />

        <label for="Shop Address">Shop Address</label>

        <input type="text" id="shopaddress" name="shopaddress" required />

        <button type="submit">Register</button>
      </div>
    </div>
  );
};


// export for shopregister component
export default ShopRegister;
