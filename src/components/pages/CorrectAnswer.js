import React from 'react';
import '../css/CorrectAnswer.css';
import ring from '../../Assets/page elements/glowingRing.svg'
import top from '../../Assets/page elements/accentTop.svg'
import bottom from '../../Assets/page elements/accentBottom.svg'

export default function CorrectAnswer({ correctAnswer, winnerUser, nextRound }) {
    return (

        <div className='winninganswer z-n1'>

            <div className='container cansweroutline'>
                <img className='ring position-absolute top-50 start-50 translate-middle' src={ring} />

                <div className='answerbox-correct z-2'>
                    <h1>{correctAnswer}</h1>
                </div>
                <div className='namebox-correct z-2'>
                    {winnerUser ? (
                        <h3>{winnerUser}</h3>

                    ) : (
                        <h3>No winners!</h3>
                    )}
                    <button onClick={nextRound}>Next Round?</button>
                </div>
            </div>
        </div>
    )

}