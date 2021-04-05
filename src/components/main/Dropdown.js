import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ action }) => {
  return (
    <div className="dropdown-menu" id="dropdown">
      <ul>
        <li className="close" onClick={action}>
          <span>X</span>
        </li>
        <Link to="/home">
          <li id="popular" onClick={action}>
            Popular
          </li>
        </Link>
        <Link to="/home">
          <li id="upcoming" onClick={action}>
            Upcoming
          </li>
        </Link>
        <Link to="/home">
          <li id="now_playing" onClick={action}>
            Now Playing
          </li>
        </Link>
        <Link to="/home">
          <li id="top_rated" onClick={action}>
            Top Rated
          </li>
        </Link>
        <Link to="/home/watch_list">
          <li onClick={action}>Watch List</li>
        </Link>
        <Link to="/home/favourites">
          <li onClick={action}>Favourites</li>
        </Link>
        <Link to="/home/recommendations">
          <li onClick={action}>Recommendations</li>
        </Link>
        <li onClick={action}>Account</li>
      </ul>
    </div>
  );
};

export default Dropdown;
