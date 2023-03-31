import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./MovieFeature.css";

const MovieFeature = ({clickedMovie, homeClicked, trailerKey, error}) => {
  {if(!error && Object.keys(clickedMovie).length){
      return (
        <section className="single-movie-details">
          <div className="content">
            <img src={clickedMovie.backdrop_path} alt="Movie Backdrop"></img>
            <div className="details">
              <h2>{clickedMovie.title}</h2>
              <p className="overview">{clickedMovie.overview}</p>
              <p className="release-date">Release Date: {clickedMovie.release_date}</p>
              <p className="rating">Rating: {clickedMovie.average_rating}/10🫑</p>
              <p className="genre">Genres: {clickedMovie.genres}</p>
              <p className="budget">Budget: ${clickedMovie.budget}</p>
              <p className="revenue">Total Revenue: ${clickedMovie.revenue}</p>
              <p className="runtime">Runtime: {clickedMovie.runtime} mins</p>
              <p className="tagline">{clickedMovie.tagline}</p>
              { trailerKey ? <iframe className='movie-poster' src={`https://www.youtube-nocookie.com/embed/${trailerKey}`} title={`${clickedMovie.title} Trailer`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> : <p> We're sorry there is no available Trailer...</p>}
            </div>
            <Link to="/home" onClick={() => homeClicked()}>
              <button className="home-button">Home</button>
            </Link>
          </div>
        </section>
      );
    } else {
      return (
        <Link to="/home" onClick={() => homeClicked()}>
          <button className="home-button">Home</button>
        </Link>
      )
    }
  }
}

export default MovieFeature;

MovieFeature.propTypes = {
  clickedMovie: PropTypes.object.isRequired,
  homeClicked: PropTypes.func.isRequired
}