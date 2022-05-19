import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="contact-copy">
        <h2>Get in touch</h2>
        <p>
          You can find me on Twitter for a chat or LinkedIn for something a bit
          more professional. Come say hello, I’d love to hear from you.
        </p>
        <p>
          If you have a role you would like to discuss or a general enquiry
          please complete the form.
        </p>
        <div className="contact-social">
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
      <div className="contact-form">
      <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
              </p>
              <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
              </p>
              <p>
                <input type="submit" value="Submit message"><button className="form-btn">Submit</button></input>
              </p>
            </form>
      </div>
    </section>
  );
};

export default Contact
