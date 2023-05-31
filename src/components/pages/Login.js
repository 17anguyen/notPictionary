import React from 'react';
import '../css/login.css';
import banner from '../../Assets/buttons/loginsignupbanner.svg'



export default function Login() {
    return (
        <main className='loginbg'>
            <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img src={banner}></img>
                </div>

                <div className="card position-absolute top-50 start-50 translate-middle" style={{
                    backgroundColor: 'black', color: 'white', border: 'solid 3px #FE00FE', borderRadius: '25px', width: '80%', height: '50%', paddingBottom: '50px', marginLeft: 'auto', marginRight: 'auto', top: '50 %', left: '50 %', transform: 'translate(-50 %, -50 %)'
                }}>
                    < div className="card-body" style={{ paddingTop: '220px' }}>

                        <form>
                            <div className="">
                                <label for="username" className="form-label">Username</label>
                                <input type="input" className="form-control" id="username" style={{ borderRadius: '25px', height: '55px' }} />
                            </div>
                            <div className="">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" style={{ borderRadius: '25px', height: '55px' }} />
                            </div>
                            <div className='text-center' style={{ paddingTop: '15px' }}>
                                <button type="submit" className="btn btn-primary" style={{ borderRadius: '25px', height: '50px', backgroundColor: '#FF6E27', width: 'auto', fontSize: '25px' }}>Submit</button>

                            </div>
                        </form>


                    </div>
                </div >

            </div>


        </main >
    );
}