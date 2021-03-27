import React from "react";

const Summary = ({ movieInfo, cast }) => {
  return (
    <div className="details-nav-container">
      <p>{movieInfo.overview}</p>
      <span className="starring-span">Starring: </span>
      {cast.length > 0 &&
        cast
          .filter((actor) => actor.order < 3)
          .map((actor) => (
            <span key={actor.order}> {actor.name} &nbsp;&nbsp;</span>
          ))}
    </div>
  );
};
export default Summary;
