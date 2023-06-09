// const word = words[Math.floor(Math.random()*words.length)];
// alert('You got ' + word);
import "../css/word.css";

import React, { useState, useEffect } from "react";

export default function Timer({ setDrawerReady }) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setDrawerReady(true);


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
