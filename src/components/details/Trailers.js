import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player/youtube";

const Trailers = ({ movieInfo }) => {
  const [trailers, setTrailers] = useState([]);

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
  ];

  useEffect(() => {
    getTrailers();
  });

  const getTrailers = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieInfo.id}/videos?api_key=cb6bfb150fbae43254ec1d34ca5b3f50&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setTrailers(data.results);
      });
  };

  if (trailers && trailers.length > 0) {
    return (
      <div className="details-nav-container">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {trailers.map((trailer) => (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}`}
              key={trailer.id}
              width={384}
              height={216}
            />
          ))}
        </Carousel>
      </div>
    );
  } else {
    return (
      <div className="details-nav-container">There are no trailers :(</div>
    );
  }
};

export default Trailers;
