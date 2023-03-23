import React, {Component} from "react";
import movieData from "../data/data";
import Navigation from "../Nav/Nav";
import GenreContainer from "../GenreContainer/Genre"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.genres = ['Action', 'Crime', 'Drama', 'Horror'];

  }

  displayAllGenres = () => {
    return this.genres.map(genre => <GenreContainer genreName={genre} />)
  }

  render() {
    return (
      <main>
        <Navigation />
        {this.displayAllGenres()}
      </main>
    )
  }

}

export default App;