import React, {Component} from "react";
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchText: ''
    }
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchText !== this.state.searchText){
        const filtedMovies = this.props.moviesData.filter(mov => {
        const movieTitle = mov.title.toLowerCase()
        const searchMatch = this.state.searchText.toLowerCase()
        if(movieTitle.includes(searchMatch)){
          return true
        } 
      })
      this.props.search(filtedMovies)
  }
}
  render(){
    return(
      <input
        className='search-bar'
        type='text'
        placeholder='search titles...'
        value={this.state.searchText}
        onChange={event => this.handleChange(event)}
      />
    )
  }
}

export default SearchBar;