import React, { useState } from "react";
import ViewCarCard from "../ViewCarCard/ViewCarCard";
import "./CarCard.css";

function CarCard(props) {
  const [openViewCarCard, setViewCarCard] = useState(false);
  return (
    <div>
      <div className="car-card">
        <h1>Make : {props.make} </h1>
        <h1>Model : {props.model}</h1>
        <h1>Color : {props.color}</h1>
        <div className="card-buttons">
          <button>View</button>
          <button
            className="openCardBtn"
            onClick={() => {
              setViewCarCard(true);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      {openViewCarCard && (
        <ViewCarCard
          closeViewCard={setViewCarCard}
          props={props}
          par={props.parkingSlot}
        />
      )}
    </div>
  );
}

export default CarCard;
