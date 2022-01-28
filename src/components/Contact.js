import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f7i9j58",
        "template_4zyvvh9",
        e.target,
        "user_o7ejxkwa6kM6tuzAACWA2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div>
        <h3>Get in touch</h3>
        <p>
          You can find me on Twitter for a chat or LinkedIn for something a bit
          more professional. Come say hello, I’d love to hear from you.
        </p>
        <p>
          If you have a role you would like to discuss or a general enquiry
          please complete the form.
        </p>
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

      <div>
        <form
          onSubmit={sendEmail}
          
        >
          <div>
            <label for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
             />
          </div>
          <div className="mb-6">
            <label  for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div >
            <label  for="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
            />
          </div>
          <div >
            <input
              type="submit"
              value="Send"
              
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
