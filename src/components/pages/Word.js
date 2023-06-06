import React from 'react'
import Timer from "./Timer"

export default function Word({setDrawerReady, correctAnswer}) {

    const letterList = Array.from(correctAnswer) ;
  
    return (
        <>
        <Timer setDrawerReady={setDrawerReady}/>
{letterList.map((letter,i)=>{
    return (
            <div key={i}>
                <h1>{letter}</h1>
            </div>
    )})}
        </>

    );
}