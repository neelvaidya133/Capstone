import React from "react";
import "./Signup.css";
import SignupImage from "../../Assets/login.svg";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-left-side">
          <img src={SignupImage} alt="signup" />
        </div>
        <div className="signup-right-side">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />

            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" required />

            <button type="submit">Sign Up</button>
          </form>
          <div className="singup-switch-text">
            Already have an account? <a href="/">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
