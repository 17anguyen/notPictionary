import React from "react";
import '../css/FinalWinner.css';
import center from '../../Assets/page elements/finalpage-banner.svg'
import gameOver from '../../Assets/page elements/gameover.svg'
import yoyo from '../../Assets/page elements/yoyo.svg'


export default function CorrectAnswer() {
    
    return <div className='finalWinner'>

        <img className='gameOver position-absolute bottom-0 start-0' src={gameOver} />
        <img className='yoyo position-absolute top-50 end-0 translate-middle-y' src={yoyo} />
        <img className='final-banner position-absolute top-0 start-50 translate-middle-x z-1' src={center} />


        <div className='banner'>
            <h2 className="position-absolute bottom-0 start-50 translate-middle-x">winner name</h2>
        </div>

    </div>
}