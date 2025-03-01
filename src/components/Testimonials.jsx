import React from "react";
import ReactMarkdown from "react-markdown";

const Testimonials = ({ heading, reviews }) => {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h3 className="testimonials__heading"><ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} /></h3>
        {reviews.length === 0 ? (
          <p>{subheading}</p>
        ) : null}
        <a href="#" className="btn btn-primary">Leave a review</a>
      </div>

      {reviews.length > 0 && (
        <div className="testimonials__carousel">
          <div className="testimonials__list">
          {reviews.map((review, index) => (
              <div className="testimonials__item" key={index}>
                <p className="testimonials__name">
                  {review.name} <em>{review.country}</em>
                </p>
                <div className={`rate rate-${review.rating || 0}`}></div>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;