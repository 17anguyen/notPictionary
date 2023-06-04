import React from 'react';
import '../css/UserSelect.css';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import arrows from '../../Assets/page elements/arrows.svg'
import planet from '../../Assets/page elements/planet.svg'

export default function createUser() {
  return (
    //     <Helmet>
    //  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    //       </Helmet>

    <div className='UserSelectbg z-n1'>
      <img className='z-1 position-absolute top-0 start-0 mx-auto' src={planet} style={{ width: '20%' }} />
      <img className='z-1 position-absolute bottom-0 end-0 mx-auto' src={arrows} style={{ width: '10%' }} />

      <div className='select container '>
        {/* <div className='container-signup '> */}

        <div className='signup position-absolute top-50 start-50 translate-middle dropdown-center' >
          <h1 className="btn-text btn dropdown-toggle" style={{ color: '#37319D' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">Select a room</h1>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">room 1</a></li>
            <li><a class="dropdown-item" href="#">room 2</a></li>
            <li><a class="dropdown-item" href="#">room 3</a></li>
          </ul>
        </div>
        {/* </div> */}


      </div>
    </div >


  );
}