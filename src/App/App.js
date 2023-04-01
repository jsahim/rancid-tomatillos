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
  
  render() {
    return (
      < >
        <Navigation/>
        <main>
          {this.state.error && <h2 className="error-message">{this.state.error}</h2>}
          {!this.state.allMovies.length && !this.state.error && 
          <div className="loading-screen">
            <p className='loading-dialogue'>LOADING . . .</p>
            <div role="img" className="loading-logo rotate"  aria-label="spinning loading logo"></div>
          </div>
          }
          <Switch>
            <Route path="/home" render={() => <MoviesDisplay key={Date.now()} data={this.state.allMovies}/>}/> 
            <Route path="/movies/:id" render={({match}) => <MovieFeature key={match.params.id} id={match.params.id} error={this.state.error}/>}/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;