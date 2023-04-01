import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Nav.css"

const Navigation = () => {
  return (
    <header className="header">
      <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
        <div className='logo-display'>
          <div role="img" className="logo-icon" aria-label="green tomatillo with eyes logo"></div>
          <h1>Rancid Tomatillos</h1>
        </div>
      </Link>
      <div role="img" className="user-icon" aria-label="user icon"></div>
    </header>
  );
}

export default Navigation;

// Navigation.propTypes = {
//   home: PropTypes.func.isRequired
// }