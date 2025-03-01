import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

const Reviews = ({ heading, subheading, generated, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const reviewItems = document.querySelectorAll('.review__entry');
    reviewItems.forEach((item, index) => {
      const reply = item.querySelector('.review__reply');
      const space = item.querySelector('.review__space');

      const updateMaxHeight = () => {
        reply.setAttribute('data-max', space.offsetHeight);
      };

      if (index === openIndex) {
        reply.style.maxHeight = `${reply.getAttribute('data-max')}px`;
      } else {
        reply.style.maxHeight = '0px';
      }

      window.addEventListener('resize', updateMaxHeight);
      updateMaxHeight();
      return () => window.removeEventListener('resize', updateMaxHeight);
    });
  }, [openIndex]);

  return (
    <section className="review">
      <header className="review__header">
        <h3 className="h2 review__heading"><ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} /></h3>
        <ReactMarkdown>{subheading}</ReactMarkdown>
      </header>
      <ol className="review__list">
        {data.map((entry, index) => (
          <li key={index} className={`review__entry ${openIndex === index ? 'open visible' : ''}`}>
            <h3 className="review__question" onClick={() => handleToggle(index)}>
              {entry.title}
            </h3>
            <div className="review__reply">
              <div className="review__space">
                <ReactMarkdown>{entry.content}</ReactMarkdown>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="review__generated">
        <p>{generated}</p>
      </div>
    </section>
  );
};

export default Reviews;