import React from 'react';
import '../css/UserSelect.css';
import top from '../../Assets/buttons/greenlargebutton.svg'
import bottom from '../../Assets/buttons/bluesmallbutton.svg'
import { Link } from 'react-router-dom'
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'

export default function createUser() {
    return (
        <div className='UserSelectbg z-n1'>
            <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
            <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

            <div className='select container z-1'>
                <Link to='/signup'>
                    <img id='signup-btn' className='signup'
                        src={top}
                        style={{
                            width: '100%', height: '100%'
                        }}>

                    </img>

                    <div className='centered-signup'>
                        <h2 className='title-signup'>Sign up</h2>
                    </div>
                </Link>
            </div>

            <div className='container-login'>
                <Link to='/login'>
                    <img id='login-btn' className='position-absolute top-50 start-50 translate-middle'
                        src={bottom}
                        style={{ width: '45%', height: '100%', paddingTop: '20vw' }}>
                    </img>

                    <div className='centered-login'>
                        <h3 className='title-login'>Log In</h3>

                    </div>
                </Link>
            </div>


        </div>

    );
}