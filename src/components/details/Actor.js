import React from "react";

const IMG_API = "https://image.tmdb.org/t/p//w1280/";

const Actor = ({ name, profile_path, character }) => (
  <div className="actor">
    <img
      src={
        profile_path
          ? IMG_API + profile_path
          : "https://images.unsplash.com/photo-1615911907304-d418c903b058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }
      alt={name}
    />
    <div className="actor-container">
      <h5>{name}</h5>
    </div>
    <div className="actor-container">
      <h5 style={{ color: "rgba(255, 255, 255, 0.5)" }}>{character}</h5>
    </div>
  </div>
);

export default Actor;
