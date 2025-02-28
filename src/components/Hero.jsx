import React from 'react';
import ReactMarkdown from 'react-markdown';

const Hero = ({ heading, paragraph, flag, country }) => {
  return (
    <header className="hero">
      <div className="hero__content">
        <figure className="hero__icon">
          <img src={flag} alt={country} />
        </figure>
        <h2 className="h2 hero__heading">
          <ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} />
        </h2>
        <p>
          <ReactMarkdown children={paragraph} components={{ p: ({ children }) => <>{children}</> }} />
        </p>
      </div>
    </header>
  );
};

export default Hero;