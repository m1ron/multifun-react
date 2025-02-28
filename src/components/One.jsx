import ReactMarkdown from "react-markdown";

const One = ({ heading, text, desktopImage, mobileImage }) => {
  return (
    <section className="one">
      <div id="one" className="one__anchor"></div>
      <header className="one__header">
        <h3 className="h2 one__heading"><ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} /></h3>
        <p><ReactMarkdown children={text} components={{ p: ({ children }) => <>{children}</> }} /></p>
      </header>
      <div className="one__screenshots">
        <figure className="d">
          <img
            src={desktopImage.src}
            width={desktopImage.width}
            height={desktopImage.height}
            alt={desktopImage.alt}
          />
        </figure>
        <figure className="m">
          <img
            src={mobileImage.src}
            width={mobileImage.width}
            height={mobileImage.height}
            alt={mobileImage.alt}
          />
        </figure>
      </div>
    </section>
  );
};

export default One;