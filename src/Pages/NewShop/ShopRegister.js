import React, { useState } from "react";
import "./ShopRegister.css";
import Cookies from "js-cookie";
import GetCompanyData from "../../graphql/Query/GetCompany";
import { useNavigate } from "react-router-dom";
import GetPrices from "../../graphql/Query/GetPrices";
const ShopRegister = () => {
  const navigate = useNavigate();
  const [shopId, setShopId] = useState(null);

  const { hasCompany, companyData, loading, error } = GetCompanyData();
  const { prices, Priceloading, Priceerror } = GetPrices(shopId);

  const handleSelect = (e) => {
    const selected = parseInt(e.target.value);
    console.log("selected", selected);
    setShopId(selected);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    Cookies.set("shopId", JSON.stringify(shopId));
    if (prices) {
      navigate("/dashboard");
    }
    Cookies.set(
      "shopName",
      companyData.find((company) => company.id === shopId).companyName
    );
    Cookies.set(
      "shopAddress",
      companyData.find((company) => company.id === shopId).companyAddress
    );
  };
  console.log("hasCompany", hasCompany);
  if (hasCompany) {
    console.log("companyData", companyData);
    return (
      <div className="newshop-container">
        <div className="newshop-head">
          <h2>You have already registered a shop</h2>
        </div>

        <div className="newshop-registerform">
          <label for="shopname">Select shop</label>
          <select
            id="shopname"
            name="shopname"
            required
            onChange={handleSelect}
          >
            <option value="">Select Shop</option>

            {companyData.map(
              (company) => (
                console.log("company", company),
                (
                  <option key={company.id} value={company.id}>
                    {company.companyName}
                  </option>
                )
              )
            )}

          </select>

          <button type="submit" onClick={handleContinue}>
            Continue
          </button>
          <select id="shopname" name="shopname" required>
            <option value="shop1">Shop 1</option>
            <option value="shop2">Shop 2</option>
            <option value="shop3">Shop 3</option>
            <option value="shop4">Shop 4</option>
          </select>

          <button type="submit" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    );
  }

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

export default ShopRegister;
