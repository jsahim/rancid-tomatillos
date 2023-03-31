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
      movieKey: '', 
      error: ''
    };
  }

  componentDidMount(){
    apiRequest("movies").then(data => {
      console.log(data)
      this.setState({allMovies: data.movies});
    }).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
  }

  setClickedMovie = id => {
    console.log(id)
    apiRequest(`movies/${id}`).then(data => {
      this.setState({selectedMovie: data.movie})}).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
    apiRequest(`movies/${id}/videos`).then(data => {
      const trailer = data.videos.find(vid => vid.site === 'YouTube' && vid.type === 'Trailer')
      this.setState({movieKey: trailer ? trailer.key : ''})
  })
  }

  goHome = () => {
    this.setState({selectedMovie: {}, error: ''});
  }
  
  render() {
    return (
      < >
        <Navigation home={this.goHome}/>
        <main>
          {this.state.error && <h2 className="error-message">{this.state.error}</h2>}
          {!this.state.allMovies.length && <p className='loading-dialogue'>LOADING...</p>}
          <Switch>
            <Route path="/home" render={() => <GenreContainer key={Date.now()} data={this.state.allMovies} select={this.setClickedMovie}/>}/> 
            <Route path="/movies/:id" render={() =>
              <MovieFeature key={this.state.selectedMovie.id} clickedMovie={this.state.selectedMovie} homeClicked={this.goHome} trailerKey={this.state.movieKey} error={this.state.error}/>
            }/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;