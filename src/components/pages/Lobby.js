import React from "react";
import "../css/lobby.css";
import "../css/UserSelect.css";
import { useState,useEffect} from 'react';
// import start from "../../Assets/buttons/startbutton.svg"


function Lobby({startGame,socket,userName,roomId}){

    const [message, setSendMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState([]);
    const isHost = true;

    const sendMessage = (e) => {
        e.preventDefault()
        if (message !== '') {
            const messageData = {
                room: roomId,
                sender: userName,
                message: message
            };
            socket.emit("send-message", messageData);
            setMessageReceived((list) => [...list, messageData]);
            setSendMessage('');
        }
    };

   useEffect(() => {
     socket.on('receive-message', (data) => {
         setMessageReceived((list) => [...list, data]);
     });
   }, [message])
   


    return(
    //     <div className='UserSelectbg z-n1'>
    //     <div className='lobby container'>

    //         <div className="container">

    //             <img classname=""
    //                 src={start}
    //                 style={{ width: '80%', marginTop: '5%', marginBottom: '5%' }}
    //             ></img>
    //             <div className='centered'>
    //                 <h2 className='startbutton' style={{ color: '#0016EE' }}>Start Game?</h2>
    //             </div>

    //         </div>
    //         <div className="container smolbox">
    //         </div>
    //     </div>
    // </div >
        <div>
            <input
                type="text"
                name='message'
                value={message}
                placeholder='message'
                onChange={(e) => {
                    setSendMessage(e.target.value)
                }} />
                <button type='submit' onClick={sendMessage}>send</button>
                <h1>Message: </h1>
                {messageReceived.map((item) => {
                    return (
                        <div key={item.sender} id={userName === item.sender ? 'sender' : 'receiver'}>
                        <div>{item.message}</div>
                        <p>--{item.sender}</p>
                        </div> )})}
                {isHost?(
                    <div>
                    <button type='submit' onClick={startGame}>Start Game</button>
                    </div>

                ):null}        
        </div>
    );

}
export default Lobby




       


