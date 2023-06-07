import React, { useState, useEffect } from 'react';
import '../css/UserSelect.css';
import { Link, useNavigate } from 'react-router-dom'
import API from '../../utils/api'
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'
// import { Dropdown } from 'bootstrap';

export default function RoomSelect() {
  const navigate = useNavigate();

  const freeRooms = async () => {
    try {
      
      const freeRoomsList = await API.getRooms();
      const li = document.querySelectorAll('.test')
      li[0].setAttribute("style", "")
      console.log(freeRoomsList)

      if (!freeRoomsList) {
        alert("No rooms available")
      } else {
        console.log(freeRoomsList)
      }
    } catch (err) {
      console.log(err)
    }
  }

   useEffect(()=>{
   freeRooms()
   },[])   

   const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/userselect')
  }

  return (
  
    <div className='UserSelectbg z-n1'>
      <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
      <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

      <div className='select container '>
        <button onClick ={handleLogout}>logout</button>
        {/* <div className='container-signup '> */}

        <div className='signup position-absolute top-50 start-50 translate-middle dropdown-center' >
          <h1 className="btn-text btn dropdown-toggle" style={{ color: '#37319D' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">Select a room</h1>
          <ul className="dropdown-menu">
            <li className='test dropdown-item'><Link to="/game/1" >Join Room 1</Link></li>
            <li className='test dropdown-item'><Link to="/game/2" >Join Room 2</Link></li>
            <li className='test dropdown-item'><Link to="/game/3" >Join Room 3</Link></li>
          </ul>
        </div>
        {/* </div> */}


      </div>
    </div >


  );
}