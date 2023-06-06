import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import Lobby from './Lobby'
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
 const local_url = 'http://localhost:4000'
// const server_url = 'https://doodledash.herokuapp.com/'

const socket = io(local_url);
// const socket = io(server_url);


function InGame({ username }) {
    console.log("=====Username:" + username)
    const styleBoard = {
        border: '2px',
        borderColor: 'red'
    }
    const [pregame, setPregame] = useState(true)
    const [answers, setAnswerMessage] = useState('');
    const [answerReceived, setAnswerReceived] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [selectedUser, setSelectedUser] = useState("")


    // figure what room were in by urlparams
    const params = useParams();
    const roomId = `room${params.roomId}`
    console.log(roomId)


    // socket.join that room

    const joinRoom = () => {
        if (roomId !== '' && username) {

            socket.emit("join-room", roomId, username)
        }
    }


    const sendAnswers = (e) => {
        e.preventDefault()
        if (answers !== '') {
            const answersData = {
                room: roomId,
                sender: username,
                message: answers
            };
            console.log("answers"+answersData)
            socket.emit("send-answers", answersData);
            setAnswerReceived((list) => [...list, answers]);
            setAnswerMessage('');
        }
    };

    useEffect(() => {
        socket.on('receive-message', (data) => {
            setAnswerReceived((list) => [...list, data]);
        });
    }, [])

    const startGame = async (e) => {
        e.preventDefault();
        socket.emit("start-game", roomId);
        setPregame(false)
    }

    //socket.on get selected player and word and show to selected user
    socket.on("selected-props", (data) => {
        setCorrectAnswer(data.selectedWord);
        setSelectedUser(data.userSelected);
        console.log(data);
        setPregame(false)
       
    })



    useEffect(() => {
        joinRoom();
    }, []);


    return (
        <>
        <h3>Drawer: {selectedUser}</h3>
            {pregame ? (
                <div>
                    <Lobby startGame={startGame} socket={socket} userName={username} roomId={roomId} />
                </div>

            ) : (
                <div className='InGamebg' style={{ backgroundImage: 'url("../../ Assets / backgrounds / gamebg.svg")' }}>
                    <div className='container-ingame' style={{ backgroundColor: 'black', border: '5px solid #FE00FE', borderRadius: '35px', margin: '2%', height: '90vh' }}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div style={styleBoard}>
                                    <Board socket={socket} roomId={roomId} />

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <h1>Answers: </h1>
                                <input
                                    type="text"
                                    name='answers'
                                    value={answers}
                                    placeholder='type your guess'
                                    onChange={(e) => {
                                        setAnswerMessage(e.target.value)
                                    }} />

                                <button type='submit' onClick={sendAnswers}>send</button>

                                {answerReceived.map((item) => {
                                    return (
                                        <div key={item.sender} id={username === item.sender ? 'sender' : 'receiver'}>
                                            <div>{item.message}</div>
                                            <p>--{item.sender}</p>
                                        </div>

                                    )


                                })}

                            </div>
                        </div>
                    </div>
                </div>

            )}

        </>
    );
}




export default InGame
