import React from 'react';

const FAQ = ({ heading, subheading, data }) => {
  return (
    <section className="faq">
      <div id="faq" className="faq__anchor"></div>
      <header className="faq__header">
        <h3 className="h2 faq__heading">{heading}</h3>
        <p>{subheading}</p>
      </header>
      <div className="faq__list">
        {data.map((entry, index) => (
          <section key={index} className="faq__entry">
            <h3 className="faq__question">{entry.question}</h3>
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