import React from "react";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import { Routes, Route, Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  let optionsOne = [
    {
      name: "Home",
      imgSrc: "../svg/home.svg",
      link: "home",
    },
    {
      name: "Cars",
      imgSrc: "../svg/cars.svg",
      link: "cars",
    },
    {
      name: "Service History",
      imgSrc: "../svg/service.svg",
      link: "service_history",
    },
    {
      name: "Package Details",
      imgSrc: "../svg/package.svg",
      link: "packages",
    },
  ];

  let optionsTwo = [
    {
      name: "Car Maintance",
      imgSrc: "../svg/carmaintance.svg",
      link: "car_maintance",
    },
    {
      name: "Mileage",
      imgSrc: "../svg/mileage.svg",
      link: "mileage",
    },
    {
      name: "Health Card",
      imgSrc: "../svg/healthcard.svg",
      link: "health_card",
    },
  ];

  let optionsThree = [
    {
      name: "Feedback",
      imgSrc: "../svg/feedback.svg",
      link: "feedback",
    },
    {
      name: "Help/ support",
      imgSrc: "../svg/support.svg",
      link: "support",
    },
    {
      name: "Service comments",
      imgSrc: "../svg/servicecomments.svg",
      link: "service_comments",
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="scroll-div">
        <div>
          <SidebarProfile />
        </div>
        <div className="option-container">
          <div className="sidebar-options">
            <div className="option-heading mb-2">Heading</div>
            {optionsOne.map((items) => (
              <Link to={items.link}>
                <div className="option">
                  <span>
                    <img src={items.imgSrc} width="23px" />
                  </span>
                  <p className="text-sm">{items.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="sidebar-options">
            <div className="option-heading mb-2">Heading</div>
            {optionsTwo.map((items) => (
              <li to={items.link}>
                <div className="option">
                  <span>
                    <img src={items.imgSrc} width="23px" />
                  </span>
                  <p className="text-sm">{items.name}</p>
                </div>
              </li>
            ))}
          </div>

          <div className="sidebar-options">
            <div className="option-heading mb-2">Heading</div>
            {optionsThree.map((items) => (
              <li to={items.link}>
                <div className="option">
                  <span>
                    <img src={items.imgSrc} width="23px" />
                  </span>
                  <p className="text-sm">{items.name}</p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
