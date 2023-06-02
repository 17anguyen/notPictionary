import React from 'react';
import '../css/RoomSelect.css';
import { Link } from "react-router-dom";


function RoomSelect() {
   
 
    return (
        
        <main className='RoomSelectbg'>
            <div className="card">
                <h1> Join Room</h1>

                <div className="card-body">
                    <Link to="/game/1" className="btn btn-success btn-lg">Join room 1</Link>
                    <Link to="/game/2" className="btn btn-success btn-lg">Join room 2</Link>
                    <Link to="/game/3" className="btn btn-success btn-lg">Join room 3</Link>
                </div>
            </div>
        </main>
    );
}
export default RoomSelect;