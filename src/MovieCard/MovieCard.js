import React from "react";
import "./MovieCard.css";


const MovieCard = props => {
  return (
    <div className="card" onClick={() => props.select(props.id)}>
      <h3>{props.title}</h3>
      <img src={props.poster} alt="Movie Image"></img>
    </div>
  );
}

export default MovieCard;