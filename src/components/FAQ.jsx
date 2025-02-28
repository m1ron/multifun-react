import React, { useState, useEffect } from 'react';

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

      // Dynamically calculate the max-height on each resize
      const updateMaxHeight = () => {
        reply.setAttribute('data-max', space.offsetHeight);
      };

      if (index === openIndex) {
        // Expand the open item
        reply.style.maxHeight = `${reply.getAttribute('data-max')}px`;
      } else {
        // Collapse all other items
        reply.style.maxHeight = '0px';
      }

      window.addEventListener('resize', updateMaxHeight);
      updateMaxHeight(); // Initialize max-height on mount

      // Cleanup event listener when component unmounts
      return () => window.removeEventListener('resize', updateMaxHeight);
    });
  }, [openIndex]); // Re-run effect whenever openIndex changes

  return (
    <section className="faq">
      <div id="faq" className="faq__anchor"></div>
      <header className="faq__header">
        <h3 className="h2 faq__heading">{heading}</h3>
        <p>{subheading}</p>
      </header>
      <div className="faq__list">
        {data.map((entry, index) => (
          <section key={index} className={`faq__entry ${openIndex === index ? 'open visible' : ''}`}>
            <h3 className="faq__question" onClick={() => handleToggle(index)}>
              {entry.question}
            </h3>
            <div className="faq__reply">
              <div className="faq__space">
                <p>{entry.answer}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FAQ;