import React from "react";
import "./login.css";
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/home" className="btn btn-primary">Register</Link>
    </div>
  );
}
export default Login;