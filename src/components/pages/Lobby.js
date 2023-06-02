import React from "react";
import "../css/lobby.css";
import "../css/UserSelect.css";
import start from "../../Assets/buttons/startbutton.svg"



export default function createRoom() {
    return (
        <div className='UserSelectbg z-n1'>
            <div className='lobby container'>

                <div className="container">

                    <img classname=""
                        src={start}
                        style={{ width: '80%', marginTop: '5%', marginBottom: '5%' }}
                    ></img>
                    <div className='centered'>
                        <h2 className='startbutton' style={{ color: '#0016EE' }}>Start Game?</h2>
                    </div>

                </div>
                <div className="container smolbox">
                </div>



            </div>





        </div >
    );
}
