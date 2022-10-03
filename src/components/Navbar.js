import React from 'react'
import cockatiel2 from './cockatiel2.png'


export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/
                "><img src={cockatiel2} className="cockatiel" alt="round birb" />Elise's Portfolio</a>
                
                <button className="navbar-toggler border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="https://www.linkedin.com/in/elise-stawarski-a7698028/" target="_blank">LinkedIn</a>
                    <a className="nav-link" href="https://github.com/Navi-beep" target="_blank">Github</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

//cockatiel - <a href="https://www.flaticon.com/free-icons/cockatiel" title="cockatiel icons">Cockatiel icons created by Freepik - Flaticon</a>