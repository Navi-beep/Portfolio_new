import React from 'react'

export default function Cat(props) {


    return (

        <div className="row p-2 card m-auto align-self-center" style={{width: '15rem' }}>
            <img src="https://via.placeholder.com/100" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
    )
}