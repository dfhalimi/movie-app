import React from "react";

const Rating = ({ movieInfo }) => {
  const stars = [];

  for (let i = 2; i <= movieInfo.vote_average; i = i + 2) {
    stars.push(i);
  }

  console.log("stars", stars);

  return (
    <div className="rating-container">
      {/*<div style={{ fontSize: 26 }}>
        <i style={{ fontSize: 30 }} className="far fa-star"></i>&nbsp;
        {movieInfo.vote_average}
  </div>*/}
      {stars.length > 0 ? (
        stars.map((star) => <i key={star} className="far fa-star"></i>)
      ) : (
        <>No ratings found :(</>
      )}
      {(movieInfo.vote_average / 2) % 1 >= 0.24 &&
      (movieInfo.vote_average / 2) % 1 < 0.89 ? (
        <i className="far fa-star-half"></i>
      ) : (movieInfo.vote_average / 2) % 1 >= 0.89 ? (
        <i className="far fa-star"></i>
      ) : null}
    </div>
  );
};

export default Rating;
