import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

import Navbar from "./main/Navbar";
import Sidebar from "./Sidebar";
import Dropdown from "./main/Dropdown";
import Movies from "./main/Movies";
import Footer from "./Footer";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("Popular Movies");
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US&page=1"
  );

  useEffect(() => {
    getMovies(api);
  }, [api]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const titleChange = (newTitle) => {
    switch (newTitle) {
      case "popular":
        setTitle("Popular Movies");
        break;
      case "upcoming":
        setTitle("Upcoming Movies");
        break;
      case "now_playing":
        setTitle("Now Playing");
        break;
      case "top_rated":
        setTitle("Top Rated Movies");
        break;
      default:
        setTitle("Movies");
        break;
    }
  };

  const onClickHandle = (e) => {
    setApi(
      `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US&page=1`
    );
    titleChange(e.target.id);
  };

  const dropdown = () => {
    document.getElementById("dropdown").classList.add("dropdown-anim");
  };

  const closeDropDown = (e) => {
    document.getElementById("dropdown").classList.remove("dropdown-anim");
    if (e.target.id) {
      onClickHandle(e);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <RingLoader color="white" size={70} />
        </div>
      ) : (
        <>
          <div className="main">
            <Dropdown action={closeDropDown} />
            <Sidebar action={onClickHandle} />
            <div>
              <i class="fas fa-bars" onClick={dropdown}></i>
              <div className="main-search">
                <h2>{title}</h2>
                <Navbar />
              </div>
              <Route path="/">
                <Movies movies={movies} />
              </Route>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
