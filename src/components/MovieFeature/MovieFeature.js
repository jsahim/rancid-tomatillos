import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cleanMovieData, cleanTrailerData } from "../../utilities/utilities"
import PropTypes from 'prop-types';
import "./MovieFeature.css";
import apiRequest from "../../data/apiCalls";

class MovieFeature extends Component {
  constructor () {
    super()
    this.state = {
      movie: {},
      trailerKey: '',
      error: '' 
    }
  }
  
  componentDidMount() {
    apiRequest(`movies/${this.props.id}`).then(data => {
      const cleanData = cleanMovieData(data.movie)
      this.setState({movie: cleanData});
    }).catch(() => this.setState({error: `We're sorry there was an error.`}));
    apiRequest(`movies/${this.props.id}/videos`).then(data => {
     const trailer = data.videos.find(vid => vid.site === 'YouTube' && vid.type === 'Trailer');
     this.setState({trailerKey: trailer ? trailer.key : ''});
   });
  }

  render() {
    if(!this.state.error){
      const movieInfo = this.state.movie
      return (
        <section className="single-movie-details">
          <div className="content">
            <img src={movieInfo.backdrop_path} alt="Movie Backdrop"/>
            <div className="details">
              <h2>{movieInfo.title}</h2>
              <p className="overview">{movieInfo.overview}</p>
              <p className="release-date">Release Date: {movieInfo.release_date}</p>
              <p className="rating">Rating: {movieInfo.average_rating}/10</p><div role="img" className="rating-img" aria-label="rating green tomatillo icon"></div>
              <p className="genres">Genres: {movieInfo.genres}</p>
              <p className="budget">Budget: ${movieInfo.budget}</p>
              <p className="revenue">Total Revenue: ${movieInfo.revenue}</p>
              <p className="runtime">Runtime: {movieInfo.runtime} mins</p>
              <p className="tagline">Tagline: {movieInfo.tagline}</p>
              { this.state.trailerKey ? <iframe className='movie-poster' src={`https://www.youtube-nocookie.com/embed/${this.state.trailerKey}`} title={`${movieInfo.title} Trailer`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe> : <p> We're sorry, there is no trailer available.</p>}
            </div>
            <Link to="/home">
              <button className="home-button">Home</button>
            </Link>
          </div>
        </section>
      );
    } else {
      return (
        <>
          <h3 className="single-error">We were unable to retreive your movie. Please return home and make a new selection.</h3>
          <Link to="/home">
            <button className="home-button">Home</button>
          </Link>
        </>
      )
    }
  }
  
}

export default MovieFeature;

// MovieFeature.propTypes = {
//   id: PropTypes.number.isRequired,
//   error: PropTypes.string.isRequired
// }