import React from "react";
import "./CarCard.css";

function CarCard(props) {
  return (
    <div>
      <div className="car-card">
        <h1>Make : {props.make} </h1>
        <h1>Model : {props.model}</h1>
        <h1>Color : {props.color}</h1>
        <div className="card-buttons">
          <button>View</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
