import React, { useState } from "react";
import AddCarPopup from "../../components/AddCarPopup/AddCarPopup";
import CarCard from "../../components/CarCards/CarCard";
import ViewCarCard from "../../components/ViewCarCard/ViewCarCard";
import "./Cars.css";

let MyCarDetails = [
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",

    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",

    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",

    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",

    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",

    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
  {
    make: "Socda",
    model: "Fabia",
    color: "grey",
    regNum: "KL02A1233",
    parkingSlot: "Lorem Ipsum",
    year: "2010",
  },
];

function Cars() {
  const [closeAddPopup, setCloseAddPopup] = useState(false);
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
              parkingSlot={items.parkingSlot}
              year={items.year}
            />
          ))}
          <div
            onClick={() => setCloseAddPopup(true)}
            className="car-card-empty"
          >
            <div>
              <img src="../svg/add.svg" alt="" width="50px" />
            </div>
            <div>Add New Car</div>
          </div>
          {closeAddPopup && <AddCarPopup closeAddPopup={setCloseAddPopup} />}
        </div>
      </div>
    </div>
  );
}

export default Cars;
