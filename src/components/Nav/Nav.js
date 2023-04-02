import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import SearchBar from "./Search/SearchBar";
import "./Nav.css"

const Navigation = ({search, moviesData}) => {
  return (
    <header className="header">
      <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
        <div className='logo-display'>
          <div role="img" className="logo-icon" aria-label="green tomatillo with eyes logo"></div>
          <h1>Rancid Tomatillos</h1>
        </div>
      </Link>
      <SearchBar search={search} moviesData={moviesData}/>
      <Link to="/user-page">
        <div role="button" className="user-icon" aria-label="user icon"></div>
      </Link>
    </header>
  );
}

export default Navigation;