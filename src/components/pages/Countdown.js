import "../css/word.css";

import React, { useState, useEffect } from "react";

export default function Countdown({ setTimeout }) {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } 
      else {
        setTimeout(true);
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