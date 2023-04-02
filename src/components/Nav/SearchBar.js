import React, {Component} from "react";

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
    <form>
      <input
        type='text'
        placeholder='Search Text'
        value={this.state.searchText}
        onChange={event => this.handleChange(event)}
      />
    </form>
    )
  }
}

export default SearchBar;