import React from "react";
import PropTypes from 'prop-types';
import "./MovieCard.css";


const MovieCard = ({select, id, title, poster}) => {
  return (
    <div className="card" onClick={() => select(id)}>
      <img src={poster} alt="Movie Image"></img>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired
}