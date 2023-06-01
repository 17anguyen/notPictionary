import React from 'react';
import '../css/UserSelect.css';
import top from '../../Assets/buttons/greenlargebutton.svg'
import bottom from '../../Assets/buttons/bluesmallbutton.svg'

export default function createUser() {
    return (
        <div className='UserSelectbg'>

            <div className='container'>

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