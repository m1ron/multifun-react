import React from "react";

const Bonus = ({ title, subtitle }) => {
  return (
    <section className="bonus">
      <h3>
        {title}{" "}
        {subtitle && (
          <small>
            <strong>{subtitle}</strong>
          </small>
        )}
      </h3>
    </section>
  );
};

export default Bonus;