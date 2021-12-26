import React from "react";
import "./MyCarList.css";

function MyCarList() {
  return (
    <div className="flex items-center mb-8">
      <div className="flex flex-row ml-8">
        <div className="small-car-card flex justify-center items-center mr-2 ">
          <h1>Car1</h1>
        </div>
        <div className="small-car-card flex justify-center items-center mr-2 ">
          <h1>Car2</h1>
        </div>
      </div>
    </div>
  );
}

export default MyCarList;
