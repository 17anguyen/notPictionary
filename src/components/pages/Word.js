import React from "react";
import Timer from "./Timer";
import "../css/word.css";
import floppydisk from '../../Assets/page elements/floppydisk.svg'
import player from '../../Assets/page elements/player.svg'
import starsRight from '../../Assets/page elements/starsright.gif'
import starsLeft from '../../Assets/page elements/starsleft.gif'

export default function Word
  // testing code out
  // () {

  ({ setDrawerReady, correctAnswer }) {
  const letterList = Array.from(correctAnswer);
  console.log(letterList);
  return (
    <>

      <div className="wordbg">

        <img className='z-1 position-absolute top-0 start-0' src={floppydisk} style={{ width: '15%' }} />
        <img className='z-1 position-absolute bottom-0 end-0' src={player} style={{ width: '15%' }} />

        <div className="row" style={{ justifyContent: 'center' }}>

          <div className="container wordbox">

            <div className="header">
              <img className='starsRight' src={starsRight} style={{ height: '80%' }} />
              <img className='starsLeft' src={starsLeft} style={{ height: '80%' }} />
              <h1 className="header-text mx-auto">Draw This Word</h1>

              <marquee
                className="text-center wordMarq position-absolute bottom-0 start-0"
                behavior="slide"
                direction="up"
              >
                <Timer setDrawerReady={setDrawerReady} />
              </marquee>
            </div>



            {letterList.map((letter, i) => {
              console.log(letter);
              return (
                <div className="letterbox mx-auto" key={i}>
                  <h3>{letter}</h3>
                </div>
              );
            })}

            <div className="instructions">
              <h4 className="mx-auto">
                you have 30 seconds to draw this word and attempt to get a correct guess
              </h4>
            </div>

          </div>

        </div>

      </div >

    </>
  );
}
