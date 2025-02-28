import ReactMarkdown from "react-markdown";
const CTA = ({ heading, action, link }) => {
  return (
    <section className="cta">
      <h3><ReactMarkdown>{heading}</ReactMarkdown></h3>
      <a className="btn btn-primary" href={link}>{action}</a>
    </section>
  );
};

export default CTA;