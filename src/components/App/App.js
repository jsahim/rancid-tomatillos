import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import apiRequest from "../../data/apiCalls";
import Navigation from "../Nav/Nav";
import MoviesDisplay from "../MoviesDisplay/MoviesDisplay";
import MovieFeature from "../MovieFeature/MovieFeature";
import UserPage from "../User/UserPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      searchedMovies: [], 
      error: ''
    };
  }

  componentDidMount(){
    apiRequest("movies").then(data => {
      this.setState({allMovies: data.movies, searchedMovies: data.movies});
    }).catch(() => {
      this.setState({error: `We're sorry there was an error. Please refresh the page!`});
    });
  }

  setSearchResults = (matchMovies) => {
    console.log(matchMovies)
    this.setState({ searchedMovies: matchMovies });
  }
  
  render() {
    let errorMessage = this.state.error
      ? <h2 className="error-message">{this.state.error}</h2>
      : !this.state.allMovies.length && !this.state.error 
      ? <div className="loading-screen">
          <p className='loading-dialogue'>LOADING . . .</p>
          <div role="img" className="loading-logo rotate"  aria-label="spinning loading logo"></div>
        </div>
      : null
  
    return (
      <>
        <Navigation search={this.setSearchResults} moviesData={this.state.allMovies}/>
        <main>
          {errorMessage}
          <Switch>
            <Route path="/home" render={() => <MoviesDisplay key={Date.now()} data={this.state.searchedMovies}/>}/> 
            <Route path="/movies/:id" render={({match}) => <MovieFeature key={match.params.id} id={match.params.id} error={this.state.error}/>}/>
            <Route exact path="/user-page" render={() => <UserPage/>}/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
