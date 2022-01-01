import React from "react";
import "./SidebarProfile.css";
import {useSelector} from 'react-redux'

function SidebarProfile() {
  const user = useSelector((state)=>state.loggedInReducers.user);
  //console.log(user);
  return (
    <div className="side-profile">
      <div className="side-profile-image">
        <img src="../assets/profile1.jpg" alt="" />
      </div>
      <div className="side-profile-name">
        <h2>{user.username}</h2>
      </div>
      <div className="side-profile-email">
        <h2>{user.email}</h2>
      </div>
      <div className="side-profile-button">
        <button className="view-profile-button">View</button>
      </div>
    </div>
  );
}

export default SidebarProfile;
