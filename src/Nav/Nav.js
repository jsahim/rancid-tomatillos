import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"


const Navigation = () => {
  return (
    <header className="header">
      <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
        <div className='logo-display'>
          <img className='logo-icon' src='./rancid-logo-eyes.png' alt="Home"></img>
          <h1>Rancid Tomatillos</h1>
        </div>
      </Link>
      <img src="" alt="site"></img>
      <img src="" alt="user Icon"></img>
    </header>
  );
}

export default Navigation;