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
    const userName = 'carito'
    const [message, setSendMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState([]);


    // figure what room were in by urlparams
    const params = useParams();
    const roomId = `room${params.roomId}`
    console.log(roomId)

   
    // socket.join that room

    const joinRoom = ()=>{
        console.log("-------hello")
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

    const startGame = async(e) =>{
        e.preventDefault();
        socket.emit("start-game",roomId);
        setPregame(false)
    }

//socket.on get selected player and word and show to selected user
    
   
    useEffect(() => {
        socket.on('receive-message', (data) => {
            setMessageReceived((list) => [...list, data]);
        });
      }, [message]);
    
    useEffect(() => {
      joinRoom();
    }, []);
    

    return (  
    <>
        {pregame ?(
            <div>
            <Lobby startGame={startGame} socket={socket} userName={userName} roomId={roomId}/>   
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
