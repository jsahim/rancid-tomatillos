import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import './MoviesDisplay.css';

const MoviesDisplay = ({data, select}) => {
  const movieCards = data.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        select={select}
      />
    );
  });
    return (
    <section>
      <div className="movie-cards">{movieCards}</div>
    </section>
  );
}

export default MoviesDisplay;

MoviesDisplay.propTypes = {
  data: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
}