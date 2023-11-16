import githubLogo from "../assets/github-mark.png";

const Footer = () => {
  return (
    <div className="footer flex items-center justify-center bg-accent p-2">
      <p>Made with ♥︎ by Team9</p>
      <a
        href="https://github.com/michaelito80us/BCN-slow-index-client"
        target="_blank"
        rel="noreferrer"
      >
        <img className="github-logo h-8" src={githubLogo} alt="github logo" />
      </a>
    </div>
  );
};

export default Footer;
