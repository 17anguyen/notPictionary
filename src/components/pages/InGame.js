import React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";
import Lobby from "./Lobby";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import Word from "./Word";
import "../css/InGame.css";
import CorrectAnswer from "./CorrectAnswer";
import FinalWinner from "./FinalWinner";
import Countdown from "./Countdown"

const local_url = 'http://localhost:4000'
const socket = io(local_url);

//  const server_url = "https://doodledash.herokuapp.com/";
//  const socket = io(server_url);

function InGame({ username }) {
  const styleBoard = {
    border: "2px",
    borderColor: "red",
  };
  const [pregame, setPregame] = useState(true);
  const [answers, setAnswerMessage] = useState("");
  const [answerReceived, setAnswerReceived] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [isDrawerReady, setDrawerReady] = useState(false);
  //who won the round
  const [winnerUser, setWinnerUser] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [round, setRound] = useState(1)
  const [isTimeout, setIsTimeout] = useState(false)
  const [finalWinner, setFinalWinner] = useState("")
  const [finalScore, setFinalScore] = useState(0)
  const [endgame, setEndgame] = useState(false)
  const [countdown, setCountdown] = useState(false)
  const [players, setPlayer] = useState([])
  // let timer

  // figure what room were in by urlparams
  const params = useParams();
  const roomId = `room${params.roomId}`;
  // socket.join that room
  const joinRoom = () => {
    if (roomId !== "" && username) {
      socket.emit("join-room", roomId, username);
    }
  };
  const sendAnswers = (e) => {
    e.preventDefault();
    if (answers !== "") {
      const answersData = {
        room: roomId,
        sender: username,
        message: answers,
      };

      socket.emit("send-answers", answersData, correctAnswer);
      setAnswerReceived((list) => [...list, answersData]);
      setAnswerMessage("");
    }
  };


  useEffect(() => {
    socket.on("receive-answer", (data) => {
      setAnswerReceived((list) => [...list, data]);
    });
    socket.on("round-over", (data) => {
      // display winner and secret word,
      setWinnerUser(data.sender);
      setIsWinner(true)
      setCountdown(false)
      // clearTimeout(timer)
    })

  }, []);
  const startGame = async (e) => {
    e.preventDefault();
    socket.emit("start-game", roomId);

  };
  //click for next round on correct word page
  const nextRound = (e) => {
    e.preventDefault();
    setIsTimeout(false)
    setCountdown(false)
    socket.emit("start-game", roomId);
  }



  socket.on("user-join", (data) => {
    setPlayer((list) => [...list, data])
  })

  //socket.on get selected player and word and show to selected user
  socket.on("selected-props", (data) => {
    // console.log(timer)
    // clearTimeout(timer)
    setCorrectAnswer(data.selectedWord);
    setSelectedUser(data.userSelected);
    setWinnerUser("");
    setIsWinner(false)
    setDrawerReady(false)
    setIsTimeout(false)
    setRound(data.round)
    setPregame(false);
    
    // start the timer
  //  timer= setTimeout(() => {
  //      setCountdown(true) 
  //   }, 7000);
  });

  const endGame = (e) => {
    e.preventDefault();
    console.log("end game button")
    socket.emit("gameover", roomId)
    setEndgame(true)
    setIsTimeout(false)
  };
  socket.on("game-over", (data) => {
    console.log("game over set variables")
    console.log(data)
    setFinalWinner(data.username)
    setFinalScore(data.score)
    setIsWinner(false)
    setCountdown(false)
    setIsTimeout(false)
    setRound(1)
    setEndgame(true)
  })




  useEffect(() => {
    joinRoom();
  }, []);

  socket.on("countdownReady", (show)=>{
    setCountdown(show)
  })

  // useEffect(() => {
   
  //   if (isDrawerReady && !endgame) {
  //    console.log(""+isDrawerReady)
  //     socket.emit("countdown", isDrawerReady, roomId);
  //   }
  // }, [isDrawerReady]);

  // socket.on("setCountdown", (show) => {
  //   if (show) {
  //     console.log("countdown starts")
  //     setCountdown(show)
  //   } else {
  //     console.log("countdown off")
  //     setCountdown(show)
  //     setIsTimeout(true)
  //   }    
  // });


  return (
    <>
      {pregame ? (
        <div>
          <Lobby
            startGame={startGame}
            socket={socket}
            userName={username}
            roomId={roomId}
            players={players}
          />
        </div>
      ) : (
        <>
          {(username == selectedUser && !isDrawerReady) ? (

            <Word
              setDrawerReady={setDrawerReady}
              correctAnswer={correctAnswer}
            />
          ) : (
            <>
              {(isWinner || isTimeout) ? (

                <CorrectAnswer
                  correctAnswer={correctAnswer}
                  winnerUser={winnerUser}
                  nextRound={nextRound}
                  endGame={endGame}
                />

              ) : (
                <>
                  {endgame ? (
                    <FinalWinner
                      finalWinner={finalWinner}
                      finalScore={finalScore}
                    />
                  ) : (

                    <div className="InGamebg" style={{ height: "100vh" }}>
                      <div className="row container-ingame">
                        <div className="col-lg-6">

                          <div style={styleBoard}>
                            <Board socket={socket} roomId={roomId} />
                          </div>
                        </div>
                        <div className="col-lg-6" style={{ color: "white" }}>
                          {countdown ? (
                            <div className="position-absolute top-0 end-0" style={{ marginRight: '1%' }}>
                              <Countdown setIsTimeout={setIsTimeout} />

                            </div>
                          ) : null}

                          <h1 className="round">ROUND {round}</h1>

                          <marquee
                            className="blink text-center"
                            behavior="slide"
                            direction="up"
                          >
                            <h3
                              style={{
                                textAlign: "center",
                                // paddingTop: "10%",
                                fontWeight: "bold",
                                fontSize: "50px",
                                color: "#DEFE47",
                              }}
                            >
                              {selectedUser} is drawing
                            </h3>
                          </marquee>
                          <div className="answerbox">
                            <h3>Answers: </h3>
                            {answerReceived.map((item, i) => {
                              return (
                                <div
                                  className="message-bubbles"
                                  key={i}
                                  id={
                                    username === item.sender ? "sender" : "receiver"
                                  }
                                >
                                  <h4>{item.sender}</h4>
                                  <h3>{item.message}</h3>
                                </div>
                              );
                            })}
                          </div>
                          <div className="userinput-game">
                            <input
                              className="userinput-body"
                              type="text"
                              name="answers"
                              value={answers}
                              placeholder="type your guess"
                              onChange={(e) => {
                                setAnswerMessage(e.target.value);
                              }}
                            />
                            <button
                              className="userinput-submitgame"
                              type="submit"
                              onClick={sendAnswers}
                            >
                              send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                </>

              )}
            </>
          )}
        </>
      )}
    </>
  );
}
export default InGame;
