import React from 'react'

export default function Word({isDrawerReady, correctAnswer}) {

    const letterList = Array.from(correctAnswer) ;
    console.log(letterList)


    return (

    <h1>this is a word</h1>

    );
}