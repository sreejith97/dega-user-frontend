import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../Containers/MainContent/MainContent";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Dashboard;
