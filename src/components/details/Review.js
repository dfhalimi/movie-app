import React from "react";

const Review = ({ author, content, url }) => (
  <div>
    <h3>{author}</h3>
    {content.length > 350 ? (
      <p>{content.substr(0, 350)}...</p>
    ) : (
      <p>{content.substr(0, 350)}</p>
    )}
    <a href={url} target="_blank" className="review-link">
      See full review
    </a>
  </div>
);

export default Review;
