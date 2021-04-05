import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ action }) => {
  const displayErrorMsg = () => {
    const errorMsg = document.getElementById("error-msg");
    if (!errorMsg.classList.contains("error-msg")) {
      errorMsg.classList.add("error-msg");
      setTimeout(() => {
        errorMsg.classList.remove("error-msg");
      }, 3000);
    }
  };

  return (
    <div className="sidebar">
      <div
        className="account-info"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "30px 30px 60px 30px",
        }}
      >
        <img
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            marginRight: 15,
          }}
          src="https://images.unsplash.com/photo-1511165403689-1e53da0499fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
          alt="Avatar"
        />
        <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 18 }}>
          Hello Stranger
        </span>
      </div>
      <ul className="sidebar-list">
        <Link to="/home">
          <li className="sidebar-item" id="popular" onClick={action}>
            Popular
          </li>
        </Link>
        <Link to="/home">
          <li className="sidebar-item test" id="upcoming" onClick={action}>
            Upcoming
          </li>
        </Link>
        <Link to="/home">
          <li className="sidebar-item" id="now_playing" onClick={action}>
            Now Playing
          </li>
        </Link>
        <Link to="/home">
          <li className="sidebar-item" id="top_rated" onClick={action}>
            Top Rated
          </li>
        </Link>
      </ul>

      <hr />

      <ul className="sidebar-list">
        <Link to="/home/watch_list">
          <li className="sidebar-item" onClick={action}>
            Watch List
          </li>
        </Link>
        <Link to="/home/favourites">
          <li className="sidebar-item" onClick={action}>
            Favourites
          </li>
        </Link>
        <Link to="/home/recommendations" onClick={action}>
          <li className="sidebar-item">Recommendations</li>
        </Link>
        <li className="sidebar-item" onClick={displayErrorMsg}>
          Account
        </li>
        <li id="error-msg">This is not a feature yet!</li>
      </ul>
    </div>
  );
};
export default Sidebar;
