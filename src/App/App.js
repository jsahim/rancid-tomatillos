import React, {Component} from "react";
import movieData from "../data/data";
import Navigation from "../Nav/Nav";
import GenreContainer from "../GenreContainer/Genre"
import MovieFeature from "../MovieFeature/MovieFeature";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  // displayAllGenres = () => {
  //   return this.genres.map(genre => <GenreContainer genreName={genre} />)
  // }

  render() {
    console.log(movieData)
    return (
      <main>
        <Navigation />
        <GenreContainer data={movieData} />
        {/* {this.displayAllGenres()} */}
        <MovieFeature />
      </main>
    )
  }

}

export default App;