import React from "react";

const Sidebar = ({ action }) => (
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
      <li className="sidebar-item" id="popular" onClick={action}>
        Popular
      </li>
      <li className="sidebar-item test" id="upcoming" onClick={action}>
        Upcoming
      </li>
      <li className="sidebar-item" id="now_playing" onClick={action}>
        Now Playing
      </li>
      <li className="sidebar-item" id="top_rated" onClick={action}>
        Top Rated
      </li>
    </ul>

    <hr />

    <ul className="sidebar-list">
      <li className="sidebar-item">Watch List</li>
      <li className="sidebar-item">Favourites</li>
      <li className="sidebar-item">Recommendations</li>
      <li className="sidebar-item">Account</li>
    </ul>
  </div>
);

export default Sidebar;
