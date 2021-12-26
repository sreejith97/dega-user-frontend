import React from "react";
import Login from "../../Containers/Login/Login";
import "./credentials.css";

import { Routes, Route, Link } from "react-router-dom";
import Signup from "../../Containers/Signup/Signup";

function Credentials() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Credentials;
