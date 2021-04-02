import React from "react";

const Dropdown = ({ action }) => (
  <div className="dropdown-menu" id="dropdown">
    <ul>
      <li className="close" onClick={action}>
        <span>X</span>
      </li>
      <li id="popular" onClick={action}>
        Popular
      </li>
      <li id="upcoming" onClick={action}>
        Upcoming
      </li>
      <li id="now_playing" onClick={action}>
        Now Playing
      </li>
      <li id="top_rated" onClick={action}>
        Top Rated
      </li>
      <li onClick={action}>Watch List</li>
      <li onClick={action}>Favourites</li>
      <li onClick={action}>Recommendations</li>
      <li onClick={action}>Account</li>
    </ul>
  </div>
);

export default Dropdown;
