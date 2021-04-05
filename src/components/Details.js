import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Rating from "./details/Rating";
import Summary from "./details/Summary";
import Cast from "./details/Cast";
import Trailers from "./details/Trailers";
import Reviews from "./details/Reviews";
import Footer from "./Footer";

const IMG_API = "https://image.tmdb.org/t/p//w1280/";

const Details = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [cast, setCast] = useState([]);
  const { info } = useParams();
  const history = useHistory();

  useEffect(() => {
    movie();
    actors();
  }, []);

  const displayErrorMsg = () => {
    const errorMsg = document.getElementById("details-error-msg");
    if (!errorMsg.classList.contains("details-error-msg")) {
      errorMsg.classList.add("details-error-msg");
      setTimeout(() => {
        errorMsg.classList.remove("details-error-msg");
      }, 3000);
    }
  };

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
            <div className="summary">
              <h2 className="overview-header summary-header">Summary</h2>
              <Summary movieInfo={movieInfo} cast={cast} />
            </div>
            <div className="title-container">
              <div id="details-error-msg">This is not a feature yet!</div>
              <h1>{movieInfo.title}</h1>
              <div className="cta-container">
                <div className="cta" onClick={displayErrorMsg}>
                  <i className="far fa-heart"></i>
                  <span>Favourite</span>
                </div>
                <div className="cta" onClick={displayErrorMsg}>
                  <i className="fas fa-plus"></i>
                  <span>Add to Watch List</span>
                </div>
                <div className="cta" onClick={displayErrorMsg}>
                  <i className="fas fa-share"></i>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="summary-resp">
          <h2 className="overview-header">Summary</h2>
          <Summary movieInfo={movieInfo} cast={cast} />
        </div>
        <div className="add-info-container">
          <h2 className="overview-header">Cast</h2>
          <Cast cast={cast} />
        </div>
        <div className="add-info-container">
          <h2 className="overview-header">Trailers</h2>
          <Trailers movieInfo={movieInfo} />
        </div>
        <div className="add-info-container">
          <h2 className="overview-header">Reviews</h2>
          <Reviews movieInfo={movieInfo} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
