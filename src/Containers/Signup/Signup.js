import React from "react";
import "./Signup.css";
import { Routes, Route, Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="signup-container">
        <div className="register-logo-container">
          <div>
            <img src="../assets/DegaLogo.png" alt="" />
          </div>
          <div className="logo-container-heading">
            <h1>Premium Car Care</h1>
            <p>Delivering Clean Mean Machines</p>
          </div>
        </div>
        <div className="register-form-container">
          <div className="register-form-heading">
            <h1>Signup</h1>
          </div>
          <form action="" className="register-form">
            <div className="inputname w-full px-8">
              <label htmlFor="">Name</label>
              <input
                type="text"
                autoComplete="off"
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                placeholder="Name"
              />
            </div>
            <div className="inputname w-full px-8">
              <label htmlFor="">Email</label>
              <input
                type="email"
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
            <div className="inputname w-full px-8">
              <label htmlFor="">Email</label>
              <select
                className="mb-5 p-3 focus:border-blue-500 rounded border-2 outline-none w-full"
                id="country"
                name="country"
              >
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="forgot-container">
              <p className="mb-2">
                Already Have Account?{" "}
                <span>
                  <Link to="/users/login">Login</Link>
                </span>
              </p>
            </div>
            <button className="bg-blue-500">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
