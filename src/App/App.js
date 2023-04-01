import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import apiRequest from "../data/apiCalls";
import Navigation from "../Nav/Nav";
import MoviesDisplay from "../MoviesDisplay/MoviesDisplay";
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

  // componentDidMount(){
  //   console.log("MOUNTING")
  //   apiRequest("movies").then(data => {
  //     this.setState({allMovies: data.movies});
  //   }).catch(() => {
  //     this.setState({error: `We're sorry there was an error. Please refresh the page!`});
  //   });
  // }


  setClickedMovie = id => {
    apiRequest(`movies/${id}`).then(data => {
      this.setState({selectedMovie: data.movie})}).catch(() => {
      this.setState({error: `We're sorry there was an error.`});
    });
    apiRequest(`movies/${id}/videos`).then(data => {
      const trailer = data.videos.find(vid => vid.site === 'YouTube' && vid.type === 'Trailer')
      this.setState({movieKey: trailer ? trailer.key : ''})
  })
  }

  // goHome = () => {
  //   this.setState({selectedMovie: {}, error: ''});
  // }

  componentDidUpdate(prevProps, prevState){
    console.log("UPDATING")
    // console.log("", prevProps)
    // console.log("", prevState)
    // if(this.state.){
    //   this.setState({selectedMovie: {}, error: ''});
    // }
  }
  
  render() {
    return (
      < >
        <Navigation home={this.goHome}/>
        <main>
          {this.state.error && <h2 className="error-message">{this.state.error}</h2>}
          {!this.state.allMovies.length && !this.state.error && 
          <div className="loading-screen">
            <p className='loading-dialogue'>LOADING . . .</p>
            <img className="loading-logo rotate" src="./rancid-logo-eyes.png" alt="spinning loading logo"/>
          </div>
          }
          <Switch>
            <Route path="/home" render={() => <MoviesDisplay key={Date.now()} data={this.state.allMovies} select={this.setClickedMovie}/>}/> 
            <Route path="/movies/:id" render={({match}) => {
              console.log("FEATURE-MATCH", match)
            {<MovieFeature key={this.state.selectedMovie.id} clickedMovie={this.state.selectedMovie} homeClicked={this.goHome} trailerKey={this.state.movieKey} error={this.state.error}/>}
            }
            }/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;