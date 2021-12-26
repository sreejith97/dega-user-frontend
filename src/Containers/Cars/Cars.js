import React from "react";
import CarCard from "../../components/CarCards/CarCard";
import "./Cars.css";

let MyCarDetails = [
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: "2010",
  },
];

function Cars() {
  return (
    <div>
      <div className="car-container">
        <div className="header">
          <h1>My Cars</h1>
        </div>
        <div className="car-flex-container">
          {MyCarDetails.map((items) => (
            <CarCard
              make={items.make}
              model={items.model}
              color={items.color}
              regNum={items.regNum}
              parking={items.parkingSlot}
              year={items.year}
            />
          ))}
          <div className="car-card-empty">
            <div>
              <img src="../svg/add.svg" alt="" width="50px" />
            </div>
            <div>Add New Car</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
