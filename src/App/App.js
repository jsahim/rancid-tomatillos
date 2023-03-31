import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
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
    console.log(id)
    apiRequest(`movies/${id}`).then(data => {
      console.log(data)
      this.setState({selectedMovie: data.movie, featureMode: true})}).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
    // apiRequest(`movies/${id}/videos`).then(data => this.setState({movieVideos: data}))
  }

  goHome = () => {
    this.setState({selectedMovie: {}, featureMode: false});
  }
  
  render() {
    return (
      < >
        <Navigation />
        <main>
          {!this.state.allMovies.length && <p className='loading-dialogue'>LOADING...</p>}
          {this.state.error && <h2>{this.state.error}</h2>}
          <Switch>
            <Route path="/home" render={() => <GenreContainer key={Date.now()} data={this.state.allMovies} select={this.setClickedMovie}/>}/> 
            <Route path="/movies/:id" render={() =>
              <MovieFeature key={this.state.selectedMovie.id} clickedMovie={this.state.selectedMovie} homeClicked={this.goHome} videos={this.state.movieVideos.videos}/>
            }/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;