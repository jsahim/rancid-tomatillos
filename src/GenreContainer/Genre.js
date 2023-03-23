import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './Genre.css';

const GenreSection = ({data}) => {
  console.log(data);
  const movieCards = data.movies.map(movie => {
    return (
      <MovieCard 
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        release={movie.release_date}
      />
    )
  })
    return (
    <section className="genre-container">
      <h2 className="genre-name">Genre Name</h2>
      <div className="movie-card">{movieCards}</div>
    </section>
  )
}

export default GenreSection;