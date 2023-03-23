import React from "react"

const MovieCard = ({title, poster, rating}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt="Movie Image"></img>
    </div>
  )
}

export default MovieCard;