import React from "react";
import { useState, useEffect } from "react";
import Board from "./Board";
import Lobby from "./Lobby";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import Word from "./Word";
import "../css/InGame.css";
import CorrectAnswer from "./CorrectAnswer";
import FinalWinner from "./FinalWinner"

// const local_url = 'http://localhost:4000'
// const socket = io(local_url);

const server_url = "https://doodledash.herokuapp.com/";
const socket = io(server_url);

function InGame({ username }) {
  console.log("=====Username:" + username);
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
  const [winnerUser, setWinnerUser] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [round, setRound] = useState(1)
  const [isTimeout, setTimeout] = useState(false)
  const [isCorrect, setCorrect] = useState(false)
  const [endgame, setEndgame] = useState(false)

  // figure what room were in by urlparams
  const params = useParams();
  const roomId = `room${params.roomId}`;
  console.log(roomId);
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
      console.log(correctAnswer)
      console.log(correctAnswer);

      console.log("answers" + answersData);
      socket.emit("send-answers", answersData, correctAnswer);
      setAnswerReceived((list) => [...list, answersData]);
      setAnswerMessage("");
    }
  };



  useEffect(() => {
    console.log("running");
    socket.on("receive-answer", (data) => {
      console.log(data.message);
      setAnswerReceived((list) => [...list, data]);
    });
    socket.on("round-over", (data) => {
      // display winner and secret word,
      setWinnerUser(data.sender);
      setIsWinner(true)
    })

  }, []);
  const startGame = async (e) => {
    e.preventDefault();
    socket.emit("start-game", roomId);

  };
  //click for next round on correct word page
  const nextRound = (e) => {
    e.preventDefault();
    socket.emit("start-game", roomId);

  }
  //socket.on get selected player and word and show to selected user
  socket.on("selected-props", (data) => {
    setCorrectAnswer(data.selectedWord);
    setSelectedUser(data.userSelected);
    setWinnerUser("");
    setIsWinner(false)
    setDrawerReady(false)
    setRound(data.round)
    setPregame(false);
  });

  const endGame = async (e) => {
    e.preventDefault();
    // socket.emit("gameover", data)
    setIsWinner(true)
    setEndgame(true)
  }


  useEffect(() => {
    joinRoom();
  }, []);

  return (
    <>
      {pregame ? (
        <div>
          <Lobby
            startGame={startGame}
            socket={socket}
            userName={username}
            roomId={roomId}
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

                <CorrectAnswer correctAnswer={correctAnswer} winnerUser={winnerUser} nextRound={nextRound} />

              ) : (
                <>
                  {endgame ? (
                    <FinalWinner endGame={endGame} />
                  ) : (
                    <div className="InGamebg" style={{ height: "100vh" }}>
                      <div className="row container-ingame">
                        <div className="col-lg-6">

                          <div style={styleBoard}>
                            <Board socket={socket} roomId={roomId} />
                          </div>
                        </div>
                        <div className="col-lg-6" style={{ color: "white" }}>
                          <h1 className="round">ROUND {round} HERE</h1>
                          <marquee
                            className="blink text-center"
                            behavior="slide"
                            direction="up"
                          >
                            <h3
                              style={{
                                textAlign: "center",
                                paddingTop: "10%",
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
