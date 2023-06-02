import React from 'react';

function Lobby({startGame,isHost}){


    return(
        <div>
            <input
                type="text"
                name='message'
                value={message}
                placeholder='message'
                onChange={(e) => {
                    setSendMessage(e.target.value)
                }} />
                <button type='submit' onClick={sendMessage}>send</button>
                <h1>Message: </h1>
                {messageReceived.map((item) => {
                    return (
                        <div key={item.sender} id={userName === item.sender ? 'sender' : 'receiver'}>
                        <div>{item.message}</div>
                        <p>--{item.sender}</p>
                        </div> )})}
                {isHost?(
                    <div>
                    <button type='submit' onClick={startGame}>Start Game</button>
                    </div>

                ):null}        
        </div>
    );

}
export default Lobby


