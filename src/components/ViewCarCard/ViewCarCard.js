import React from "react";
import "./ViewCarCard.css";
function ViewCarCard({ closeViewCard, props }) {
  return (
    <div>
      <div onClick={() => closeViewCard(false)} className="popup-background">
        <div className="popup-container">
          <div className="flex justify-center mb-5">
            <div>
              <h1 className="uppercase font-extrabold text-2xl">Edit Car</h1>
            </div>
          </div>
          <form action="">
            <div className="input-container mb-5">
              <div className="lable">Make:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.make}
                />
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Model:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.regNum}
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Color:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.color}
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Reg Number:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.model}
                />
              </div>
            </div>

            <div className="input-container mb-5">
              <div className="lable">Parking Slot:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.parkingSlot}
                />
              </div>
            </div>
            <div className="input-container mb-5">
              <div className="lable">Year:</div>{" "}
              <div>
                <input
                  className=" p-3 focus:border-blue-500 rounded border-2 outline-none "
                  type="text"
                  value={props.year}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button className="edit-button">Submit</button>
              <button
                onClick={() => closeViewCard(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewCarCard;
