import React from 'react';
import '../css/FinalWinner.css';
import { Link } from 'react-router-dom';
import center from '../../Assets/page elements/finalpage-banner.svg'
import gameOver from '../../Assets/page elements/gameover.svg'
import yoyo from '../../Assets/page elements/yoyo.svg'


export default function FinalWinner({finalWinner,finalScore}) {

    console.log("finale page")
    console.log(finalWinner)

    return (
    <div>
        {/* //className='finalWinner' */}
        <img className='gameOver position-absolute bottom-0 start-0' src={gameOver} />
        <img className='yoyo position-absolute top-50 end-0 translate-middle-y' src={yoyo} />
        <img className='final-banner position-absolute top-0 start-50 translate-middle-x z-1' src={center} />


        <div className='banner'>
            <h2 >{finalWinner}</h2>
            <h2>{finalScore}</h2>    
        </div>
        <Link to='/'>Home</Link>
    </div>
    );
}