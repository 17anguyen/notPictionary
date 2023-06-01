import React from "react";
import "../css/RoomSelect.css";
import top from "../../Assets/buttons/greenlargebutton.svg";
import bottom from "../../Assets/buttons/bluesmallbutton.svg";

export default function createRoom() {
  return (
    <div className="RoomSelectbg">
      <div className="container">
        <div className="buttontop">
          <img src={top} />
        </div>

        <div className="buttonbottom z-1" style={{ paddingTop: "20%" }}>
          <img src={bottom} />
        </div>
      </div>
    </div>
  );
}
