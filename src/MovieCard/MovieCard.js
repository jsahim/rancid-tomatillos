import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.css";


const MovieCard = ({select, id, title, poster}) => {
  return (
    <Link to={`/movies/${id}`} onClick={() => select(id)}>
      <div className="card">
        <img src={poster} alt={title}></img>
      </div>
    </Link>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  select: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}