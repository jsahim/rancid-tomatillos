import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.css";


const MovieCard = ({select, id, title, rating, poster}) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="card">
        <img src={poster} alt={title}></img>
        <div className="card-rating" >
          <div role="img" className="rating-img" aria-label="rating green tomatillo icon"></div>
          <p className="movie-rating">{rating}/10</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
}