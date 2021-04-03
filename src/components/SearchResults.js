import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "./main/Navbar";
import Movies from "./main/Movies";
import Footer from "./Footer";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=cb6bfb150fbae43254ec1d34ca5b3f50&query=";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const { searchterm } = useParams();

  useEffect(() => {
    getMovies(SEARCH_API + searchterm);
  }, [searchterm]);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  if (movies) {
    return (
      <>
        <div className="search-nav">
          <Link to="/home">
            <i className="fas fa-chevron-left back-btn"></i>
          </Link>
          <Navbar />
        </div>
        <div className="search-results">
          <h2>SEARCH RESULTS FOR {searchterm.toUpperCase()}</h2>
          <hr className="search-hr" />
          <div className="search-movies">
            {movies.length > 0 ? (
              <Movies movies={movies} />
            ) : (
              <p>No movies found with that name :(</p>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default SearchResults;
