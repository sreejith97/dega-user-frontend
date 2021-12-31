import React, { useEffect, useState } from "react";
import Login from "../../Containers/Login/Login";
import "./credentials.css";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from "../../Containers/Signup/Signup";

function Credentials(props) {
  const [auth, setAuth] = useState(props.auth);
  const navigate = useNavigate();
  console.log(auth);
  return (
    <div>
      {auth !=1 ? (<><Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes></>):(window.location.href="/")}
      
    </div>
  );
}

export default Credentials;
