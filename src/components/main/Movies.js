import React from "react";

import Movie from "./Movie";

const Movies = ({ movies }) => (
  <div className="movies-div">
    {movies.length > 0 &&
      movies.map((movie) => <Movie key={movie.id} {...movie} />)}
  </div>
);

export default Movies;
