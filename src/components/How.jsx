const How = ({ heading, description, steps }) => (
  <section className="how">
    <div id="how" className="how__anchor"></div>
    <h3 className="h2 how__heading">{heading}</h3>
    <p>{description}</p>
    <ol className="how__list">
      {steps.map((step, index) => (
        <li key={index}>
          <p>{step.text}</p>
          <figure className="how__icon">
            <img src={step.src} alt={step.alt} />
          </figure>
        </li>
      ))}
    </ol>
  </section>
);

export default How;