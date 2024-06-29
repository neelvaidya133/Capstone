import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import loginImage from "../../Assets/login.svg";

const LoginPage = () => {
  return (
      <div className="content">
          <div class="left-part">
            <img src={loginImage} alt="login" />
          </div>
          <div class="right-part">
            <h1>Welcome to Tailor's Data</h1>
            <h2>Log In</h2>
            <form>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required />

              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />

              <button type="submit">Login</button>
            </form>
            <div class="signup-text">
              Or, Don't have an account? <Link to="/signup">Sign Up Now!!</Link>
            </div>
          </div>
      </div>
  );
};

export default LoginPage;


// Reference for login.svg, it is taken & downloaded from https://undraw.co/illustrations & https://undraw.co/search
