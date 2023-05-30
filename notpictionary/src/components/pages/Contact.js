import React from 'react';
import mail from '../../Assets/images/mail.gif';




export default function Contact() {
    return (
        <main>

            <div className="card">
                <div className="card-header">
                    Lets Connect!
                </div>
                <div className="card-body">

                    <div className="mb-3 mx-auto p-2">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-success">First and last name</span>
                        <input type="text" aria-label="First name" className="form-control" />
                        <input type="text" aria-label="Last name" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success btn-lg">Success</button>
                </div>
            </div>
            <img alt="progress" src={mail} className="position-absolute top-50 start-50 translate-middle" />
        </main>
    );
}