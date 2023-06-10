import "../css/word.css";

import React, { useState, useEffect } from "react";

export default function Countdown({ setIsTimeout,socket, roomId }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } 
      else {
        console.log("timer is up")
        setIsTimeout(true);
        socket.emit("start-countdown",false,roomId)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}