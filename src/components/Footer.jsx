import githubLogo from "../assets/github-mark.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-2 footer bg-accent">
      <p>Made with ♥︎ by Team9</p>
      <a
        href="https://github.com/michaelito80us/BCN-slow-index-client"
        target="_blank"
        rel="noreferrer"
      >
        <img className="h-8 github-logo" src={githubLogo} alt="github logo" />
      </a>
    </div>
  );
};

export default Footer;
