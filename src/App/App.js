import React, {Component} from "react";
import movieData from "../data/data";
import Navigation from "../Nav/Nav";
import GenreContainer from "../GenreContainer/Genre"
import MovieFeature from "../MovieFeature/MovieFeature";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {}
    }
  }

  // displayAllGenres = () => {
  //   return this.genres.map(genre => <GenreContainer genreName={genre} />)
  // }

  setClickedMovie = (id) => {
    const foundMov = movieData.movies.find(mov => mov.id == id)
    console.log(foundMov)
    this.setState({selectedMovie: foundMov})
    console.log(this.state.selectedMovie)
  }

  render() {
    return (
      <main>
        <Navigation />
        <GenreContainer data={movieData} select={this.setClickedMovie}/>
        {/* {this.displayAllGenres()} */}
        <MovieFeature clickedMovie={this.state.selectedMovie}/>
      </main>
    )
  }

}

export default App;