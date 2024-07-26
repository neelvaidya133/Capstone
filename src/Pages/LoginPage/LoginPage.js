import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginImage from "../../Assets/login.svg";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { SIGNIN } from "../../graphql/Mutation/Signin";
import { jwtDecode } from "jwt-decode";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signin] = useMutation(SIGNIN, {
    onCompleted({ signin }) {
      setIsLoading(false);
      console.log("signin", signin);
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
    onError(error) {
      setAuthError("Invalid Credentials");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signin({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
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
=======
import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import loginImage from "../../Assets/login.svg";

const LoginPage = () => {
  return (
    <div className="login-content">
      <div class="login-left-part">
        <img src={loginImage} alt="login" width={400} height={400} />
      </div>
      <div class="login-right-part">
        <h1>Welcome to Tailor's Data</h1>
        <h2>Log In</h2>
        <form>
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

