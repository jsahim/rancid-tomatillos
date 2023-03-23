import React from "react"
import "./MovieCard.css"


const MovieCard = ({title, poster, rating}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={poster} alt="Movie Image"></img>
    </div>
  )
}

export default MovieCard;