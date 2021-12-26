import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="nav-logo flex-center">
        <div className="logo">Logo</div>
        <div className="logo-name">name</div>
      </div>
      <div className="nav-search">search</div>
      <div className="nav-tools tool-list">
        <div>
          <img className="svg-img" src="../svg/notification.svg" alt="" />
        </div>
        <div>
          <button className="flex-center ">
            <img className="svg-img" src="../svg/profile.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
