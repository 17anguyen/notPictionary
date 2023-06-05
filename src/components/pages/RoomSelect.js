import React, {useState, useEffect } from 'react';
import '../css/UserSelect.css';
import { Link } from 'react-router-dom'
import API from '../../utils/api'
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'

export default function RoomSelect() {

  const freeRooms = async ()=> {    
    try {
      const freeRoomsList = await API.getRooms();
      console.log(freeRoomsList)
      if (!freeRoomsList) {
        alert("No rooms available")
      }else{
        console.log(freeRoomsList)
      }
    }catch(err){
      console.log(err)
    }
  }

   useEffect(()=>{
   freeRooms()
   },[])

  return (
    <div className='UserSelectbg z-n1'>
      <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
      <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

      <div className='select container '>
        {/* <div className='container-signup '> */}

        <div className='signup position-absolute top-50 start-50 translate-middle dropdown-center' >
          <h1 className="btn-text btn dropdown-toggle" style={{ color: '#37319D' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">Select a room</h1>
          <ul class="dropdown-menu">
            <li><Link to="/game/1" className="dropdown-item" >Join Room 1</Link></li>
            <li><Link to="/game/2" className="dropdown-item" >Join Room 2</Link></li>
            <li><Link to="/game/3" className="dropdown-item" >Join Room 3</Link></li>
          </ul>
        </div>
        {/* </div> */}


      </div>
    </div >


  );
}