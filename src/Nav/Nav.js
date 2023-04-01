import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Nav.css"


const Navigation = ({home}) => {
  return (
    <header className="header">
      <Link to="/home" style={{ textDecoration: 'none', color: 'white' }} onClick={() => home()}>
        <div className='logo-display'>
          <img className='logo-icon' src='./rancid-logo-eyes.png' alt="Home"></img>
          <h1>Rancid Tomatillos</h1>
        </div>
      </Link>
      <img src="" alt="user Icon"></img>
    </header>
  );
}

export default Navigation;

// Navigation.propTypes = {
//   home: PropTypes.func.isRequired
// }