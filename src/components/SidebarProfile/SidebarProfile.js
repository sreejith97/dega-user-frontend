import React from "react";
import "./SidebarProfile.css";

function SidebarProfile() {
  return (
    <div className="side-profile">
      <div className="side-profile-image">
        <img src="../assets/profile1.jpg" alt="" />
      </div>
      <div className="side-profile-name">
        <h2>First name</h2>
      </div>
      <div className="side-profile-email">
        <h2>name@gmail.com</h2>
      </div>
      <div className="side-profile-button">
        <button className="view-profile-button">View</button>
      </div>
    </div>
  );
}

export default SidebarProfile;
