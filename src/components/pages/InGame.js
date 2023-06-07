import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import Lobby from './Lobby'
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import Word from "./Word"
import "../css/InGame.css";

//const local_url = 'http://localhost:4000'
const server_url = 'https://doodledash.herokuapp.com/'

//const socket = io(local_url);;
 const socket = io(server_url);


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
    const [isDrawerReady, setDrawerReady] = useState(false)


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
            if (answers === correctAnswer) {
                console.log(answers)
                const winnerUser = answersData.sender

                //end round
                //+1 pt
            }
            console.log(correctAnswer)
            // console.log(answers)
            console.log("answers" + answersData)
            socket.emit("send-answers", answersData);
            setAnswerReceived((list) => [...list, answersData]);
            setAnswerMessage('');
        }
    };

    useEffect(() => {
        console.log("running")
        socket.on('receive-answer', (data) => {
            console.log(data.message)
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

        setPregame(false)
    })



    useEffect(() => {
        joinRoom();
    }, []);


    return (
        <>
            {pregame ? (
                <div>
                    <Lobby startGame={startGame} socket={socket} userName={username} roomId={roomId} />
                </div>

            ) : (
                <>

                    {(username == selectedUser && !isDrawerReady) ? (
                        <>
                            <Word setDrawerReady={setDrawerReady} correctAnswer={correctAnswer} />
                        </>
                    ) : (
                        <div className='InGamebg' style={{ height: '100vh' }}>
                            <div className='container-ingame'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div style={styleBoard}>
                                            <Board socket={socket} roomId={roomId} />

                                        </div>
                                    </div>

                                    <div className='col-lg-6' style={{ color: 'white' }}>
                                        <h1 className='round'>ROUND # HERE</h1>
                                        <marquee
                                            className='blink text-center'
                                            behavior="slide"
                                            direction="up">
                                            <h3
                                                style={{
                                                    textAlign: 'center',
                                                    paddingTop: '10%',
                                                    fontWeight: 'bold',
                                                    fontSize: '50px',
                                                    color: '#DEFE47'
                                                }}>
                                                {selectedUser} is drawing
                                            </h3>
                                        </marquee>
                                        <div className='answerbox'>
                                            <h3>Answers: </h3>
                                            {answerReceived.map((item) => {

                                                return (
                                                    <div className='message-bubbles' key={item.sender} id={username === item.sender ? 'sender' : 'receiver'}>
                                                        <h4>{item.sender}</h4>
                                                        <h3>{item.message}</h3>
                                                    </div>

                                                )
                                            })}

                                            <div className='userinput-game'>
                                                <input
                                                    className='userinput-body'
                                                    type="text"
                                                    name='answers'
                                                    value={answers}
                                                    placeholder='type your guess'
                                                    onChange={(e) => {
                                                        setAnswerMessage(e.target.value)
                                                    }} />

                                                <button
                                                    className='userinput-submitgame'
                                                    type='submit'
                                                    onClick={sendAnswers}>
                                                    send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </>

            )}

        </>
    );
}




export default InGame
