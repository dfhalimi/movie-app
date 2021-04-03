import React from "react";
import Carousel from "react-elastic-carousel";

import Actor from "./Actor";

const Cast = ({ cast }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 6 },
    { width: 1450, itemsToShow: 7 },
    { width: 1750, itemsToShow: 8 },
  ];

  return (
    <div className="details-nav-container">
      <Carousel pagination={false} breakPoints={breakPoints}>
        {cast.length > 0 &&
          cast.map((actor) => <Actor key={cast.id} {...actor} />)}
      </Carousel>
    </div>
  );
};

export default Cast;
