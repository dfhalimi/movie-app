import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Review from "./Review";

const Reviews = ({ movieInfo }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  });

  const getReviews = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieInfo.id}/reviews?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.results);
      });
  };

  if (reviews && reviews.length > 0) {
    return (
      <div className="details-nav-container">
        <Carousel itemsToShow={1} pagination={false}>
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </Carousel>
      </div>
    );
  } else {
    return <div className="details-nav-container">There are no reviews :(</div>;
  }
};

export default Reviews;
