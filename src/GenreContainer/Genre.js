import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import './Genre.css';

const GenreSection = ({data, select}) => {
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
    <section className="genre-container">
      <div className="movie-cards">{movieCards}</div>
    </section>
  );
}

export default GenreSection;

GenreSection.propTypes = {
  data: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
}