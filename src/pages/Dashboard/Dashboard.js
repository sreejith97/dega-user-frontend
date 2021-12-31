import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../Containers/MainContent/MainContent";
import "./Dashboard.css";

function Dashboard(props) {
  const [auth, setAuth] = useState(props.auth)
  return (
    
    <div className="dashboard-page">
      {auth == 1 ? (<> <Header />
      <Sidebar />
      <MainContent /></>):(window.location.href="/users/login")}
     
    </div>
  );
}

export default Dashboard;