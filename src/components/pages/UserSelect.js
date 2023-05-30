import React from 'react';
import '../css/UserSelect.css';

export default function createUser () {
    return (
        
        <main className='UserSelectbg'>
            <div className="card">
    
                <div className="card-body">
                    <button type="button" class="btn btn-success btn-lg">Create User</button>
                    <button type="button" class="btn btn-success btn-lg">Sign In</button>
                </div>
                
            </div>
        </main>
    );
}