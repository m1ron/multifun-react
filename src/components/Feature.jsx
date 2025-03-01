import React from "react";

const Feature = ({ title, description, tags }) => {
  return (
    <div className="feature">
      <h3 className="feature__heading">{title}</h3>
      <p>{description}</p>
      <div className="feature__tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Feature;