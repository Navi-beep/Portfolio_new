import React from 'react'
import cockatiel2 from './cockatiel2.png'


export default function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/
                "><img src={cockatiel2} class="cockatiel" alt="round birb" />Elise's Portfolio</a>
                
                <button class="navbar-toggler border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/">LinkedIn</a>
                    <a class="nav-link" href="/">Github</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

//cockatiel - <a href="https://www.flaticon.com/free-icons/cockatiel" title="cockatiel icons">Cockatiel icons created by Freepik - Flaticon</a>