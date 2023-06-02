import React from "react";
import "../css/UserSelect.css";
import top from '../../Assets/buttons/greenlargebutton.svg'
import bottom from '../../Assets/buttons/bluesmallbutton.svg'
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'


export default function createRoom() {
  return (
    <div className='UserSelectbg z-n1'>
      <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
      <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

      <div className='select container'>

        <a href='/lobby'>
          <img className='signup'
            src={top}
            style={{
              width: '100%',
              height: '100%'
            }} />
        </a>

        <div className='centered-signup'>
          <h2 className='title-signup'>Create a room</h2>

        </div>

        <div className='container-login'>
          <a href='/lobby'>
            <img className='position-absolute top-50 start-50 translate-middle'
              src={bottom}
              style={{ width: '45%', height: '100%', paddingTop: '20vw' }} />
          </a>

          <div className='centered-login'>
            <h3 className='title-login'>Join a room</h3>

          </div>
        </div>


      </div>





    </div >
  );
}
