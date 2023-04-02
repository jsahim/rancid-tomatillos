import React from "react";
import { Link } from "react-router-dom";
import "./UserPage.css"

const UserPage = () => {
  console.log("user area")
  return (
    <section className="user-page">
      <h2> Welcome User, thanks for stopping by!</h2>
      <h3>We are currently developing our user login features! Please check back soon!</h3>
      <Link to="/home">
        <button className="home-button">Home</button>
      </Link>
    </section>
  );
}

export default UserPage;