import ReactMarkdown from "react-markdown";
const Index = ({ heading, description, loginLink, demoLink }) => (
  <header className="index">
    <div className="index__content">
      <h2 className="h1 index__heading"><ReactMarkdown children={heading} components={{ p: ({ children }) => <>{children}</> }} /></h2>
      <p><ReactMarkdown children={description} components={{ p: ({ children }) => <>{children}</> }} /></p>
      <div className="buttons index__buttons">
        <a href={loginLink} className="btn btn-primary">Login Up</a>
        <a href={demoLink} className="btn">Watch Demo</a>
      </div>
    </div>
  </header>
);

export default Index;