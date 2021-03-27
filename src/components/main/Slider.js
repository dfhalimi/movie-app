import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import Movie from "./Movie";

const Slider = ({ api }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(api);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 },
    { width: 400, itemsToShow: 3 },
    { width: 550, itemsToShow: 4, itemsToScroll: 2 },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 6, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 7 },
    { width: 1750, itemsToShow: 8 },
  ];

  if (movies) {
    return (
      <Carousel
        itemsToShow={7}
        itemsToScroll={3}
        pagination={false}
        breakPoints={breakPoints}
      >
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Carousel>
    );
  }
};

export default Slider;
