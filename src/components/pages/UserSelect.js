import React from 'react';
import background from '../../Assets/backgrounds/createuserbg.gif';

export default function createUser () {
    return (
        <main> <img alt="background" src={background} className="position-absolute translate-middle" />
            
            <div className="card">
    
                <div className="card-body">
                    <button type="button" class="btn btn-success btn-lg">Create User</button>
                    <button type="button" class="btn btn-success btn-lg">Sign In</button>
                </div>
                
            </div>
        </main>
    );
}