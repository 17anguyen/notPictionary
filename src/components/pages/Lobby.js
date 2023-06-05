import React from "react";
import "../css/lobby.css";
import "../css/UserSelect.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Lobby({ startGame, socket, userName, roomId }) {

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
            console.log(data)
            setMessageReceived((list) => [...list, data]);
        });
    }, [])



    return (
        <div className='UserSelectbg z-n1'>
            <div className='lobby container'>

                <div className="container-lobby">
                    <h1 className="btn-text-lobby lobby-text" type='submit' onClick={startGame}>Start Game?</h1>
                </div>
                <div className="container smolbox">
                    <div className="container message-box">

                        <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '40px', color: '#37319D' }}>CHAT</h3>

                        <div className="message-body">

                            {messageReceived.map((item) => {
                                return (
                                    <div className="row"
                                        key={item.sender}
                                        id={userName === item.sender
                                            ? 'sender' : 'receiver'}>
                                        <p className="col-sm-3">--{item.sender}</p>
                                        <div className="col-sm-9">{item.message}</div>

                                    </div>)
                            })}
                        </div>
                        <div className="message-input">
                            <input
                                type="text"
                                className="user-text"
                                name='message'
                                value={message}
                                placeholder='message'
                                onChange={(e) => {
                                    setSendMessage(e.target.value)
                                }} />
                            <button
                                className="user-submit"
                                type='submit'
                                onClick={sendMessage}>
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        // <div className='UserSelectbg z-n1'>
        //     <div className='lobby container'>
        //         <div className="container">
        //             <button type='submit' onClick={startGame}>Start Game</button>
        //             <div className="container smolbox">
        //                 <input
        //                     type="text"
        //                     name='message'
        //                     value={message}
        //                     placeholder='message'
        //                     onChange={(e) => {
        //                         setSendMessage(e.target.value)
        //                     }} />
        //                 <button type='submit' onClick={sendMessage}>send</button>
        //                 <h1>Message: </h1>
        //                 {messageReceived.map((item) => {
        //                     return (
        //                         <div key={item.sender} id={userName === item.sender ? 'sender' : 'receiver'}>
        //                             <div>{item.message}</div>
        //                             <p>--{item.sender}</p>
        //                         </div>)
        //                 })}
        //                 {isHost ? (
        //                     <button type='submit' onClick={startGame}>Start Game</button>

        //                 ) : null}



        //             </div>


        //         </div>
        //     </div>
        // </div>
    );

}
export default Lobby







