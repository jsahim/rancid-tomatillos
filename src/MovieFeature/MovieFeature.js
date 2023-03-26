import React from "react";
import PropTypes from 'prop-types';
import "./MovieFeature.css";

const MovieFeature = ({clickedMovie, homeClicked}) => {
  return (
    <section className="single-movie-details">
      <div className="content">
        <h2>{clickedMovie.title}</h2>
        <img src={clickedMovie.backdrop_path} alt="Movie Backdrop"></img>
        <div>
          <p className="overview">{clickedMovie.overview}</p>
          <p className="release-date">{clickedMovie.release_date}</p>
          <p className="rating">{clickedMovie.average_rating}</p>
          <p className="genre">{clickedMovie.genres}</p>
          <p className="budget">{clickedMovie.budget}</p>
          <p className="revenue">{clickedMovie.revenue}</p>
          <p className="runtime">{clickedMovie.runtime}</p>
          <p className="tagline">{clickedMovie.tagline}</p>
        </div>
        <button className="home-button" onClick={() => homeClicked()}>Home</button>
      </div>
    </section>
  );
}

export default MovieFeature;

MovieFeature.propTypes = {
  clickedMovie: PropTypes.object.isRequired,
  homeClicked: PropTypes.func.isRequired
}