import React from "react";
import "./Login.css";
import { Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login-container">
        <div className="login-form-logo-container">
          <div>
            <img src="../assets/DegaLogo.png" alt="" />
          </div>
          <div className="logo-container-heading">
            <h1>Premium Car Care</h1>
            <p>Delivering Clean Mean Machines</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form-heading">
            <h1>Login</h1>
          </div>
          <div className="login-form-profile-img">
            <img src="../svg/avatar.svg" alt="" />
          </div>

          <form action="" className="login-form">
            <div className="inputname w-full px-8">
              <label htmlFor="">Name</label>
              <input
                type="text"
                autoComplete="off"
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                placeholder="Name"
              />
            </div>
            <div className="inputpassword w-full px-8">
              <label htmlFor="">Password</label>
              <input
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                type="password"
                autoComplete="off"
                placeholder="**********"
              />
            </div>
            <div className="forgot-container">
              <p className="mb-2">
                Forgot Password?{" "}
                <span>
                  <Link to="/users/signup">Signup</Link>
                </span>
              </p>
            </div>
            <button className="bg-blue-500">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
