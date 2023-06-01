const word = words[Math.floor(Math.random()*words.length)];
alert('You got ' + word);

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{seconds}s</h1>
    </div>
  );
};

export default Timer;