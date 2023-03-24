import React, {Component} from "react";
import "./MovieFeature.css";

class MovieFeature extends Component {
  constructor ({movie}) {
    super();
    this.state = {
      clickedMovie: {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }
    }
  }

  goHome = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const movie = this.state.clickedMovie
    return (
      <section className="single-movie-details">
        <div className="content">
          <h2>{movie.title}</h2>
          <img src={movie.backdrop_path} alt="Movie Backdrop"></img>
          <p className="overview">{movie.overview}</p>
          <p className="release-date">{movie.release_date}</p>
          <p className="rating">{movie.average_rating}</p>
          <p className="genre">{movie.genres}</p>
          <p className="budget">{movie.budget}</p>
          <p className="revenue">{movie.revenue}</p>
          <p className="runtime">{movie.runtime}</p>
          <p className="tagline">{movie.tagline}</p>
          <button className="home-button" onClick={this.goHome}>Home</button>
        </div>
      </section>
    );
  }
}

export default MovieFeature;