import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import SignupImage from "../../Assets/login.svg";

const Signup = () => {
  return (
    <div className="signup-content">
      <div className="signup-left-part">
        <img src={SignupImage} alt="signup" width={400} height={400} />
      </div>
      <div className="signup-right-part">
        <h2>Sign Up</h2>
        <form>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Enter your password again"
            required
          />

          <label for="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-login-text">
          Or, Already have an account? <Link to="/login">Log In Now!!</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// Reference for login.svg, it is taken & downloaded from https://undraw.co/illustrations & https://undraw.co/search
