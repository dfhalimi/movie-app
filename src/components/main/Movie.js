import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p//w1280/";

const Movie = ({ id, title, poster_path, vote_average }) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getGenre();
  }, []);

  const getGenre = () => {
    fetch(`
https://api.themoviedb.org/3/movie/${id}?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setGenre(data.genres);
      });
  };

  if (genre) {
    return (
      <div className="movie">
        <Link to={`/details/${id}`}>
          <img
            src={
              poster_path
                ? IMG_API + poster_path
                : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
            }
            alt={title}
          />
          <span className="tag">
            <i className="fas fa-star"></i> &nbsp;
            {vote_average}
          </span>
          <h3>{title}</h3>
          <h3 style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            {genre.length == 1
              ? genre[0].name
              : genre.length > 1
              ? genre[0].name + " | " + genre[1].name
              : "None"}
          </h3>
        </Link>
      </div>
    );
  }
};

export default Movie;
