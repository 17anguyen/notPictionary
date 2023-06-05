import React from 'react';
import '../css/home.css';
import banner from '../../Assets/page elements/doodledashbanner.svg'
import cd from '../../Assets/page elements/cdplayer.svg'
import gameboy from '../../Assets/page elements/gameboy.png'


export default function Home() {
    return (
        <a href="/userselect">
            <div className='homebg'>
                <img className='z-1 position-absolute top-0 start-0' src={gameboy} style={{ width: '20%' }} />
                <img className='z-1 position-absolute bottom-0 end-0' src={cd} style={{ width: '20%' }} />

                <div className='home container position-absolute top-50 start-50 translate-middle'>
                    <img className='position-absolute top-50 start-50 translate-middle' src={banner} style={{ width: '100%' }} />

                </div>

            </div >
        </a>
    );
}
