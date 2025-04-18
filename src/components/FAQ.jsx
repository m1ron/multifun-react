import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

const FAQ = ({ heading, subheading, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq__entry');
    faqItems.forEach((item, index) => {
      const reply = item.querySelector('.faq__reply');
      const space = item.querySelector('.faq__space');

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
    <section className="faq">
      <div id="faq" className="faq__anchor"></div>
      <header className="faq__header">
        <h3 className="h2 review__heading"><ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} /></h3>
        <ReactMarkdown>{subheading}</ReactMarkdown>
      </header>
      <div className="faq__list">
        {data.map((entry, index) => (
          <section key={index} className={`faq__entry ${openIndex === index ? 'open visible' : ''}`}>
            <h3 className="faq__question" onClick={() => handleToggle(index)}>
              {entry.question}
            </h3>
            <div className="faq__reply">
              <div className="faq__space">
                <ReactMarkdown>{entry.answer}</ReactMarkdown>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FAQ;