import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>debbie dann digital</h1>
      <div className="links">
        <div className="nav-links">
          <Link to="home">Home</Link>
          <a href="/">Projects</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
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
