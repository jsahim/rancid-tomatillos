import React, {Component} from "react";
import "./MovieFeature.css";

class MovieFeature extends Component {
  // //ARE WE USING THIS CONSTRUCTOR AT ALL???
  // constructor ({movie}) {
  //   super();
  //   this.state = {
  //     clickedMovie: movie
  //   }
  // }

  goHome = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const movie = this.props.clickedMovie
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