import React from "react";
import Timer from "./Timer";

export default function Word({ setDrawerReady, correctAnswer }) {
  const letterList = Array.from(correctAnswer);
  console.log(letterList);
  return (
    <>
      <Timer setDrawerReady={setDrawerReady} />
      {letterList.map((letter, i) => {
        console.log(letter);
        return (
          <div key={i}>
            <h1>{letter}</h1>
          </div>
        );
      })}
    </>
  );
}
