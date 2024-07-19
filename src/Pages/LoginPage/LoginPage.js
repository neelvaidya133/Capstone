import React from "react";
import "./LoginPage.css";
import loginImage from "../../Assets/login.svg";
const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <div class="login-wrapper">
          <div class="login-left-side">
            <img src={loginImage} alt="login" />
          </div>
          <div class="login-right-side">
            <h2>Login</h2>
            <form>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />

              <button type="submit">Login</button>
            </form>
            <div class="login-sign-up-text">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
