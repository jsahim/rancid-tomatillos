import React from "react";
import './Genre.css';

const GenreSection = ({genreName}) => {
  return (
    <section className="genre-container">
      <h2 className="genre-name">{genreName}</h2>
    </section>
  )
}

export default GenreSection;