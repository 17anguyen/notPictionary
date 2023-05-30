import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import work from '../../Assets/images/workin.gif';
import "../css/home.css";

export default function Home() {
    return (
        <main className='homebg'>
            <div className='row align-center'>

                <div className='home-banner'>
                    <h3>
                        <marquee className='blink text-center' behavior="slide" direction="up">Don't Mind the Dust. This Site is Under Construction</marquee>
                    </h3>
                </div>

                <div className='' style={{ paddingBottom: '150px' }}>
                    <img className='mx-auto d-block' alt="progress" src={work} style={{ height: '110%' }} />
                </div >

            </div>
        </main >
    );
}
