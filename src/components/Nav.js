import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-title">
        <h1>debbie dann digital</h1>
      </Link>
      <div className="links">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#projects">Projects</a>
          <a href="#about-section">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a
            href="https://twitter.com/debbie_digital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/debbiedann/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
