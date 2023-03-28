import React, {Component} from "react";
import apiRequest from "../data/apiCalls";
import Navigation from "../Nav/Nav";
import GenreContainer from "../GenreContainer/Genre";
import MovieFeature from "../MovieFeature/MovieFeature";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      selectedMovie: {},
      movieVideos: {}, 
      featureMode: false,
      error: ''
    };
  }

  componentDidMount(){
    apiRequest("movies").then(data => {
      this.setState({allMovies: data.movies});
    }).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
  }

  setClickedMovie = id => {
    apiRequest(`movies/${id}`).then(data => this.setState({selectedMovie: data.movie, featureMode: true})).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
    apiRequest(`movies/${id}/videos`).then(data => this.setState({movieVideos: data}))
  }

  goHome = () => {
    this.setState({selectedMovie: {}, featureMode: false});
  }
  
  render() {
    return (
      <main>
        <Navigation />
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.featureMode && <GenreContainer key={Date.now()} data={this.state.allMovies} select={this.setClickedMovie}/>}
        {this.state.featureMode && <MovieFeature key={this.state.selectedMovie.id} clickedMovie={this.state.selectedMovie} homeClicked={this.goHome} videos={this.state.movieVideos.videos}/>}
      </main>
    );
  }
}

export default App;