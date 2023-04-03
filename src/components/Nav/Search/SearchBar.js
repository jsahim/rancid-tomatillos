import React, {Component} from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchText: ''
    }
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  }

  clearBar = () => {
    this.setState({searchText: ''});
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchText !== this.state.searchText){
      const filtedMovies = this.props.moviesData.filter(mov => {
        const movieTitle = mov.title.toLowerCase();
        const searchMatch = this.state.searchText.toLowerCase();
        if(movieTitle.includes(searchMatch)){
          return true;
        } else {
          return false;
        }
      });
      this.props.search(filtedMovies);
    }
  }

  render(){
    return(
      <div className="search-container">
        <input
          className='search-bar'
          type='text'
          placeholder='search titles...'
          value={this.state.searchText}
          onChange={event => this.handleChange(event)}
        />
        <button className="clear-search-btn" onClick={() => {
          this.clearBar();
          this.props.clearSearch();
          }}>X</button>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  moviesData: PropTypes.array.isRequired,
  clearSearch: PropTypes.func.isRequired
};