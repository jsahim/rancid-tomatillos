import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.css";


const MovieCard = ({select, id, title, rating, poster}) => {
  return (
    <Link to={`/movies/${id}`} onClick={() => select(id)}>
      <div className="card">
        <img src={poster} alt={title}></img>
        <div className="card-rating" >
          <img className="rating-img" src='./rancid-logo.png' alt=""/>
          <p>{rating}/10</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  select: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
}