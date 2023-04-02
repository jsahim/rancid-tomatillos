import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from 'prop-types';
import './MoviesDisplay.css';

const MoviesDisplay = ({data, loading}) => {
  let movieContents; 
  !data.length && !loading ? movieContents = <h2 style={{color:"white"}}>We're sorry, but there are no movies that match your search.</h2> 
  : movieContents = data.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
      />
    );
  });
    return (
    <section>
      <div className="movie-cards">{movieContents}</div>
    </section>
  );
}

export default MoviesDisplay;

MoviesDisplay.propTypes = {
  data: PropTypes.array.isRequired
}