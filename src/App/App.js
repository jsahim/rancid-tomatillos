import React, {Component} from "react";
import resolvePromise from "../data/apiCalls";
import movieData from "../data/data";
import Navigation from "../Nav/Nav";
import GenreContainer from "../GenreContainer/Genre"
import MovieFeature from "../MovieFeature/MovieFeature";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      selectedMovie: {},
      movieChosen: false
    }
  }

  componentDidMount(){
    resolvePromise("movies").then(data => {
      this.setState({allMovies: data.movies})
    })
  }
  // displayAllGenres = () => {
  //   return this.genres.map(genre => <GenreContainer genreName={genre} />)
  // }

  setClickedMovie = (id) => {
    const foundMov = movieData.movies.find(mov => mov.id == id)
    this.setState({selectedMovie: foundMov, movieChosen: true})
  }

  render() {
    return (
      <main>
        <Navigation />
        {!this.state.movieChosen && <GenreContainer data={movieData} select={this.setClickedMovie}/>}
        {this.state.movieChosen && <MovieFeature clickedMovie={this.state.selectedMovie}/>}
      </main>
    )
  }

}

export default App;