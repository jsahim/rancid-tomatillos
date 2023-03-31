import React from "react";
import PropTypes from 'prop-types';
import "./MovieFeature.css";

const MovieFeature = ({clickedMovie, homeClicked, videos}) => {
  console.log(videos)
  let trailer = videos.find(video => video.site === 'YouTube' && video.type === 'Trailer')
  console.log(trailer)
  let movieKey

  !trailer == [] ? movieKey = trailer.key : movieKey = false 
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
          {movieKey ? <iframe src={`https://www.youtube.com/embed/${trailer.key}`} title={`${clickedMovie.title} Trailer`}></iframe> : <p>We're sorry there is no available Trailer...</p>}
        </div>
      </div>
          <button className="home-button" onClick={() => homeClicked()}>Home</button>
    </section>
  );
}

export default MovieFeature;

MovieFeature.propTypes = {
  clickedMovie: PropTypes.object.isRequired,
  homeClicked: PropTypes.func.isRequired
}