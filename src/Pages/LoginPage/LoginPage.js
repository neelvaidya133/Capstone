<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
=======

import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
import "./LoginPage.css";
import LoginImage from "../../Assets/login.svg";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { SIGNIN } from "../../graphql/Mutation/Signin";
import { jwtDecode } from "jwt-decode";

const LoginPage = (props) => {
<<<<<<< HEAD
  // Using the useState hook, creating a state variables for authError, isLoading, email & password along with their setter functions and setting their initial values.
  // With the help of useNavigate() hook, we can easily navigate to different pages.
=======
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  // useMutation hook for the SIGNIN mutation
  const [signin] = useMutation(SIGNIN, {
    // onCompleted callback, when mutation is completed successfully
    onCompleted({ signin }) {
      setIsLoading(false);
      console.log("signin", signin);
      // checking the JWT token in the response. if present then, it will store & decode a JWT token in cookies. 
      // After that, it will redirect to the register shop page or else, if there is any authetication error exists then it will display that error. 
=======
  const [signin] = useMutation(SIGNIN, {
    onCompleted({ signin }) {
      setIsLoading(false);
      console.log("signin", signin);
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
      if (signin?.jwtToken) {
        Cookies.set("jwtToken", signin.jwtToken);

        const decoded = jwtDecode(signin.jwtToken);
        console.log("decoded", decoded);
        Cookies.set("user_id", JSON.stringify(decoded.user_id));

        navigate("/registerShop");
      } else {
        setAuthError("Invalid Credentials");
      }
    },
<<<<<<< HEAD
    // onError callback, when mutation is not completed successfully
=======
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
    onError(error) {
      setAuthError("Invalid Credentials");
    },
  });

<<<<<<< HEAD
  // Function to handle Login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // passing the email variable & password variable to signin mutation
=======
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
    signin({
      variables: {
        email: email,
        password: password,
      },
    });
  };

<<<<<<< HEAD
  // if loading state is true, then it will display a loading message
=======
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
<<<<<<< HEAD
      <div className="login-content">
        <div className="login-left-part">
          <img src={LoginImage} alt="login" width={400} height={400} />
        </div>
        <div className="login-right-part">
          <h1>Welcome to Tailor's Data</h1>
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Updating the email state with the help of onChange
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Updating the password state with the help of onChange
            />
          
            {/* If any authentication error exists, then it will be displayed */}
            {authError && <p style={{ color: "red" }}>{authError}</p>}

            <button type="submit">Log in</button>
          
          </form>
          <div class="login-signup-text">
          Or, Don't have an account? <Link to="/signup">Sign Up Now!!</Link>
          </div>
=======
    <div className="container">
      <div className="login-wrapper">
        <div className="login-left">
          <img src={LoginImage} alt="login image" />
        </div>
        <div className="login-right">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Welcome to Tailor's Data</h1>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {authError && <p style={{ color: "red" }}>{authError}</p>}
            <div className="form-item">
              <button type="submit" className="login-form-button">
                Log in
              </button>
              Or <Link to="/signup">register now!</Link>
            </div>
          </form>
>>>>>>> 01e2c522f2742fd24d9b8a415291cbe0dbc393f5
        </div>
      </div>
  );
};

export default LoginPage;

