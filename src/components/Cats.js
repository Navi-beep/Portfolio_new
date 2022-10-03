import React from 'react'
import pexels from './pexels.jpg'

export default function Cat(props) {


    return (

        <div className="row mt-5 p-2 card m-auto align-self-center text-center" style={{width: '15rem' }}>
            <h3 className="text-center">Cat-Tastic Fantastic App</h3>
            <img src={pexels}  className="card-img-top" alt="cat paw at keyboard"/>
            <div className="card-body">
                <h5 className="card-title text-center">A Cat Social Media</h5>
                <p className="card-text text-center">An App where you can post about your favorite internet cats, get random cat images, and see cat friends. </p>
                <a href="https://final-project-cat-app.herokuapp.com/" target="_blank" className="btn btn-primary rounded-pill">Check it out</a>
            </div>
        </div>
        
    )
}

//cat paw img - https://www.pexels.com/photo/orange-cat-foot-on-laptop-keyboard-1440387/