import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import Lobby from './Lobby'
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
const local_url = 'http://localhost:4000/'
//const server_url = 'https://doodledash.herokuapp.com/'

const socket = io(local_url);


function InGame() {
    const styleBoard = {
        border: '2px',
        borderColor: 'red'
    }
    const [pregame, setPregame] = useState(true)
    const [roomId, setRoom] = useState(null)
    const userName = 'carito'
    const [message, setSendMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState([]);


    // figure what room were in by urlparams
    const params = useParams();
    setRoom(params)
    console.log(params)

    // socket.join that room
    useEffect(() => {
        joinRoom()

    },[setRoom])

    const joinRoom = ()=>{
        if (roomId !== '' && userName !== '' ) {
    
        socket.emit("join-room", roomId,userName)

        
        }
    }

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
    }, [socket])

    const startGame = async(e) =>{
        e.preventDefault();

        console.log(e.target)
        setPregame(false)
        console.log(pregame)

    }

    return (  
    <>
        {pregame ?(
            <div>
            <Lobby startGame={startGame} />
            
            </div>
            
        ):(
         <div className='row'>
         <div className='col-lg-6'>
         <div style={styleBoard}>
         <Board socket={socket} />
         
         </div>

            </div>
            
            <div className='col-lg-6'>
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
                        </div>
                        
                        )
                        
                        
                    })}
                    
                    </div>
                    </div>
                    
                    )}

        </>
    );
}




export default InGame
