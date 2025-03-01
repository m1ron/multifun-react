import React from "react";
import Feature from "./Feature";

const features = ({ data }) => {
  return (
    <div className="features">
      {data.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          description={feature.description}
          tags={feature.tags}
        />
      ))}
    </div>
  );
};

export default features;