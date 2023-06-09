import React, { useState, useEffect } from "react";
import "../css/UserSelect.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import arrows from "../../Assets/page elements/arrows.svg";
import planet from "../../Assets/page elements/planet.svg";

export default function RoomSelect() {
  const [roomList, setFreeRooms] = useState([]);
  const allLi = document.querySelectorAll(".dropdown-item");
  const navigate = useNavigate();
  allLi.forEach((item) => {
    if (roomList.includes(item.id) && roomList[0]) {
      item.style.color = "blue";
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  const freeRooms = async () => {
    try {
      const freeRoomsList = await API.getRooms();
      if (!freeRoomsList[0]) {
        alert("No rooms available");
        setFreeRooms([" "]);
      } else {
        setFreeRooms(freeRoomsList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    freeRooms();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/userselect')
  };

  return (
    <div className="UserSelectbg z-n1">
      <button onClick={handleLogout} className="logout-btn position-absolute top-0 end-0">logout</button>
      <img
        className="z-1 position-absolute top-0 start-0 mx-auto"
        src={planet}
        style={{ width: "20%" }}
      />
      <img
        className="z-1 position-absolute bottom-0 end-0 mx-auto"
        src={arrows}
        style={{ width: "10%" }}
      />
      <div className="select container ">

        {/* <div className='container-signup '> */}
        <div className="signup position-absolute top-50 start-50 translate-middle dropdown-center">
          <h1
            className="btn-text btn dropdown-toggle"
            style={{ color: "#37319D" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select a room
          </h1>
          <ul className="dropdown-menu">
            <li>
              <Link to="/game/1" className="dropdown-item" id="room1">
                Join Room 1
              </Link>
            </li>
            <li>
              <Link to="/game/2" className="dropdown-item" id="room2">
                Join Room 2
              </Link>
            </li>
            <li>
              <Link to="/game/3" className="dropdown-item" id="room3">
                Join Room 3
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
