import React from 'react';
import '../css/UserSelect.css';
import top from '../../Assets/buttons/greenlargebutton.svg'
import bottom from '../../Assets/buttons/bluesmallbutton.svg'
import { Link } from 'react-router-dom'

export default function createUser() {
    return (
        <div className='UserSelectbg'>

            <div className='container'>

                <button id='signup-btn'><Link to='/signup'>Sign up</Link></button>
                <button id='login-btn'><Link to='/login'>Login</Link></button>
                <div className='buttontop'>
                    <img src={top} />
                </div>

                <div className='buttonbottom z-1' style={{ paddingTop: '20%' }}>
                    <img src={bottom} />
                </div>

            </div>


        </div >
    );
}