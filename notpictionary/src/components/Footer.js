import React from 'react';
import github from '../Assets/images/github.png'
import linkedin from '../Assets/images/linkedin.png'

export default function Footer() {
    return (
        <footer className="fixed-bottom container px-4 text-center">
            <a href="https://github.com/17anguyen" target="_blank" rel="noreferrer">
                <img alt="github logo" src={github} style={{ width: 'auto', height: '50px', }} />
            </a>
            <a className='linkedin' href="https://www.linkedin.com/in/alivia-thomas-4b9a7b207/" target="_blank" rel="noreferrer">
                <img alt="linkedin logo" src={linkedin} style={{ width: 'auto', height: '50px', }} />
            </a>

        </footer>
    );
}
