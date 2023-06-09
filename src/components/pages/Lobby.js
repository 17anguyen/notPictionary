import React from "react";
import "../css/lobby.css";
import "../css/UserSelect.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lobby({ startGame, socket, userName, roomId, players }) {
  const [message, setSendMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  const isHost = true;

  const sendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      const messageData = {
        room: roomId,
        sender: userName,
        message: message,
      };
      socket.emit("send-message", messageData);
      // setMessageReceived((list) => [...list, messageData]);
      setSendMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessageReceived((list) => [...list, data]);
    });
  }, []);

  return (
    <div className="UserSelectbg z-n1">
      <div className="lobby container">
        <div className="container-lobby">
          <h1
            className="btn-text-lobby lobby-text"
            type="submit"
            onClick={startGame}
          >
            Start Game?
          </h1>
        </div>
        <div className="container smolbox row">
          <div className="users-body col-sm-6">
            {players.map((item) => {
              return (
                <div
                  className="users-bubbles"
                  key={item}
                >
                  <h3>{item}</h3>
                </div>
              );
            })}
          </div>
          <div className="col-sm-6" style={{ marginTop: '2%' }}>
            <div className="container message-box">
              <h3
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "#37319D",
                }}
              >
                CHAT
              </h3>

              <div className="message-body">
                {messageReceived.map((item) => {
                  return (
                    <div
                      className="message-bubbles"
                      key={item.sender}
                      id={userName === item.sender ? "sender" : "receiver"}
                    >
                      <h4>{item.sender}</h4>
                      <h3>{item.message}</h3>
                    </div>

                  );
                })}
              </div>

            </div>
            <div className="message-input">
              <div className="userinput-lobby">

                <input
                  type="text"
                  className="lobby-body"
                  name="message"
                  value={message}
                  placeholder="message"
                  onChange={(e) => {
                    setSendMessage(e.target.value);
                  }} />

                <button
                  className="userinput-subitlobby"
                  type="submit"
                  onClick={sendMessage}
                >
                  send
                </button>
              </div>
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
export default Lobby;
