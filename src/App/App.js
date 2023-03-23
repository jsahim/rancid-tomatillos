import React, {Component} from "react";
import movieData from "../data/data";
import Navigation from "../Nav/Nav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.genres = ['Action', 'Crime', 'Drama', 'Horror'];

  }

  render() {
    return (
      <main>
        <Navigation />
        {this.genres.map(genre => <GenreContainer genreName={genre} />)}
      </main>
    )
  }

}

export default App;