import React from 'react'
import groundhog from './groundhog.png'

export default function Gopher(props) {


    return (

        <div className="row mt-5 p-2 card m-auto align-self-center text-center" style={{width: '18rem' }}>
            <h3 className="text-center">Gopher Weather App</h3>
            <img src={groundhog}  className="card-img-top" alt="cute gopher"/>
            <div className="card-body">
                <h5 className="card-title text-center">A cute gopher based weather app</h5>
                <p className="card-text text-center">An App where you can check the weather in different cities all over the world with a little gopher friend!</p>
                <a href="/" target="_blank" className="btn btn-primary rounded-pill">Check it out</a>
            </div>
        </div>
        
    )
}

//gopher icon - https://www.flaticon.com/free-icon/groundhog_3873770?term=groundhog&page=1&position=9&page=1&position=9&related_id=3873770&origin=search