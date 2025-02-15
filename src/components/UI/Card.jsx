import React from 'react'
import "./Card.css"

const Card = ({ curMovie }) => {
    const { Poster, imdbID, Title } = curMovie
    return (
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID} />
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <h6>{Title}</h6>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card
