import React from "react";
import Carousel from "react-elastic-carousel";

import Actor from "./Actor";

const Cast = ({ cast }) => (
  <div className="details-nav-container">
    <Carousel itemsToShow={3} pagination={false}>
      {cast.length > 0 &&
        cast.map((actor) => <Actor key={cast.id} {...actor} />)}
    </Carousel>
  </div>
);

export default Cast;
