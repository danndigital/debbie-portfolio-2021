import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import {MdClose} from "react-icons/md"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {useState} from "react";

const Nav = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => setActive(!active);

  return (
    <nav>
      <Link to="/" className="nav-title">
        <h1>debbie dann digital</h1>
      </Link>
      <div className="menu-icon">
        <GiHamburgerMenu className="menu" onClick={showMenu} />
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
        <div className={active ? 'slider active' : 'slider'}>
            <div className="nav-links">
              <div className="closed"><MdClose className="close" onClick={showMenu} /></div>
              <Link to="/">Home</Link>
              <HashLink to="/#projects">Projects</HashLink>
              <HashLink to="/#about-section">About</HashLink>
              <HashLink to="/#contact">Contact</HashLink>
            </div>
         </div>
    </nav>
  );
};

export default Nav;
