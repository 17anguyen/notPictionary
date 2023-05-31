import React from 'react';
import '../css/RoomSelect.css';

export default function createRoom() {
    return (

        <main className='RoomSelectbg'>
            <div className="card">
                <h1> RoomSelect</h1>

                <div className="card-body">
                    <button type="button" class="btn btn-success btn-lg">Enter a Room Code</button>
                    <button type="button" class="btn btn-success btn-lg">Create a Room</button>
                </div>

            </div>
        </main>
    );
}