import ReactMarkdown from "react-markdown";

const LogoItem = ({ src, width, height, alt }) => (
  <li><img src={src} width={width} height={height} alt={alt} /></li>
);

const LogoGroup = ({ logos }) => (
  <ul className="logos__group">
    {logos.map((logo, index) => (
      <LogoItem key={index} {...logo} />
    ))}
  </ul>
);

const Logos = ({ title, logos }) => (
  <section className="logos">
    <h3 className="logos__heading">
      <span><ReactMarkdown children={title} components={{ p: ({ children }) => <>{children}</> }} /></span>
    </h3>
    <div className="logos__marquee">
      <LogoGroup logos={logos} />
      <LogoGroup logos={logos} aria-hidden="true" />
    </div>
  </section>
);

export default Logos;