import React from "react";
import { Link } from "react-router-dom"
import './css/nav.css'


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', }}>

            <div class="container-fluid">
                <a class="navbar-brand" href="/" style={{ color: 'white', fontWeight: 'bolder', }}>Alivia Thomas</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navlist" aria-controls="navlist" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navlist">

                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link" href="/about" style={{ color: 'white', }}>About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/portfolio" style={{ color: 'white', }}>Portfolio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/contact" style={{ color: 'white', }}>Contact</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/resume" style={{ color: 'white', }}>Resume</a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav >

    );
}

export default Navigation;