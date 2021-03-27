import React, { useState, useEffect } from "react";
import {
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import Rating from "./details/Rating";
import Summary from "./details/Summary";
import Cast from "./details/Cast";
import Trailers from "./details/Trailers";
import Reviews from "./details/Reviews";

const IMG_API = "https://image.tmdb.org/t/p//w1280/";
const changeFocus = () => {
  document.getElementById("summary").classList.remove("active");
};

const Details = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [cast, setCast] = useState([]);
  const { info } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    movie();
    actors();
  }, []);

  const movie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${info}?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieInfo(data);
      });
  };

  const actors = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${info}/credits?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCast(data.cast);
      });
  };

  return (
    <>
      <div className="details-container">
        <img
          src={
            movieInfo.backdrop_path
              ? IMG_API + movieInfo.backdrop_path
              : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          }
          alt={movieInfo.original_title}
        />
        <div className="details-ui">
          <div className="details-overview">
            <i
              style={{ cursor: "pointer" }}
              className="fas fa-chevron-left"
              onClick={() => history.goBack()}
            ></i>
            <Rating movieInfo={movieInfo} />
            <div className="details-nav">
              <div className="details-navbar">
                <Link to={`${url}`} className="active" id="summary">
                  Summary
                </Link>
                <Link to={`${url}/cast`} onClick={changeFocus}>
                  Cast
                </Link>
                <Link to={`${url}/trailers`} onClick={changeFocus}>
                  Trailers
                </Link>
                <Link to={`${url}/reviews`} onClick={changeFocus}>
                  Reviews
                </Link>
              </div>
              <div className="details-nav-content">
                <Route exact path={`${path}`}>
                  <Summary movieInfo={movieInfo} cast={cast} />
                </Route>
                <Route path={`${path}/cast`}>
                  <Cast cast={cast} />
                </Route>
                <Route path={`${path}/trailers`}>
                  <Trailers movieInfo={movieInfo} />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews movieInfo={movieInfo} />
                </Route>
              </div>
            </div>
            <div className="title-container">
              <h1>{movieInfo.title}</h1>
              <div className="cta-container">
                <div className="cta">
                  <i className="far fa-heart"></i>
                  <span>Favourite</span>
                </div>
                <div className="cta">
                  <i className="fas fa-plus"></i>
                  <span>Add to Watch List</span>
                </div>
                <div className="cta">
                  <i className="fas fa-share"></i>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-container"></div>
    </>
  );
};

export default Details;
