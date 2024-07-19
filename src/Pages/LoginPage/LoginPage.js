import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import loginImage from "../../Assets/login.svg";

const LoginPage = () => {
  // Using the useState hook, creating a state variables for email, password & errors along with their setter functions and setting their initial values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  // With the help of useNavigate() hook, we can easily navigate to different pages
  const navigate = useNavigate();

  // Function for the validation of the login form
  const validateForm = () => {
    let loginFormErrors = {};
    let isValid = true;

    // Email Address validation
    if (!email) {
      isValid = false;
      loginFormErrors["email"] = "Please enter an Email Address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      loginFormErrors["email"] = "Email address is not valid";
    }

    // Password validation
    if (!password) {
      isValid = false;
      loginFormErrors["password"] = "Please enter a Password";
    }

    setErrors(loginFormErrors);
    return isValid;
  };

  // Function to handle login form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // If form is valid, then redirect to the Dashboard page
    if (validateForm()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-content">
      <div class="login-left-part">
        <img src={loginImage} alt="login" width={400} height={400} />
      </div>
      <div class="login-right-part">
        <h1>Welcome to Tailor's Data</h1>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Updating the email state with the help of onChange
          />
          {/* If error exists for the email address, then it will be displayed */}
          {errors.email && <p className="login-error-msg">{errors.email}</p>}

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updating the password state with the help of onChange
          />
          {/* If error exists for the password, then it will be displayed */}
          {errors.password && <p className="login-error-msg">{errors.password}</p>}

          <button type="submit">Login</button>
        </form>
        <div class="login-signup-text">
          Or, Don't have an account? <Link to="/signup">Sign Up Now!!</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// Reference for login.svg, it is taken & downloaded from https://undraw.co/illustrations & https://undraw.co/search
