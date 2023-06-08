import React from 'react';
import '../css/CorrectAnswer.css';

export default function CorrectAnswer({correctAnswer,winnerUser,nextRound}) {

    
    return  (
    <div className='winninganswer'>

        <h2>{correctAnswer}</h2>
        {winnerUser?(
            <h4>{winnerUser}</h4>
        ):(
            <h4>No winners :C</h4>
        )}
        <button onClick={nextRound}>Next Round?</button>
        
    </div>
    );
}