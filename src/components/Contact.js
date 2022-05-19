import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
})

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const handleChange = e => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
}


const [errors, setErrors] = useState({})
const validate = (formData) => {
    let formErrors = {}
    if(!formData.name){
        formErrors.name = "Name required"
    }
    if(!formData.email){
        formErrors.email = "Email required"
    } 
    if(!formData.message){
        formErrors.message = "Message is required"
    }
    return formErrors
}

const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = e => {
    setErrors(validate(formData))
    setIsSubmitted(true)
    e.preventDefault();

}



useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitted){

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...formData })
        })
        .then(() => alert("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({name: "", email: "",  message: ""}))
        .catch(error => alert(error))
    }
}, [errors, formData, isSubmitted])

console.log(errors, formData)

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
          <form
          onSubmit={handleSubmit}
          name="contact-form" netlify netlify-honeypot="bot-field" hidden
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            type="text"
            value={formData.name} 
            onChange={handleChange}
          /> {errors.name && <p>{errors.name}</p>} 
          <label htmlFor="email">E-mail Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email} 
            onChange={handleChange}
          /> {errors.email && <p>{errors.email}</p>} 
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message} 
            onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact
