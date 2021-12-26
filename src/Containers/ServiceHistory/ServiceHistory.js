import React from "react";
import BigCalender from "../../components/Calender/BigCalender";
import FullCalendarComponent from "../../components/Calender/FullCalenderComponent";
import MyCarList from "../../components/MyCarList/MyCarList";
import "./ServiceHistory.css";

function ServiceHistory() {
  return (
    <div>
      <div className="service-history-container">
        <div className="header">
          <h1>Service History</h1>
        </div>
        <div className="">
          <MyCarList />
        </div>
        <FullCalendarComponent />
      </div>
    </div>
  );
}

export default ServiceHistory;
