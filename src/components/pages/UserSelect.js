import React from 'react';
import '../css/UserSelect.css';
import { Link } from 'react-router-dom'
import top from '../../Assets/buttons/greenlargebutton.svg'
import bottom from '../../Assets/buttons/bluesmallbutton.svg'
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'

export default function createUser() {
    return (
        <div className='UserSelectbg z-n1'>
            <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
            <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

            <div className='select container'>
                <div className='container-signup'>

                    <Link to='/signup' className='signup' >
                        <h1 className="btn-text">signup</h1>
                    </Link>
                </div>

                <div className='container-login'>

                    <Link to='/login' className='login' >
                        <h1 className="btn-text">Log In</h1>
                    </Link>
                </div>



            </div>
        </div >

    );
}