import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact"
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const YogaNuxt = () => {
    return ( 
        <section className="case-study">
            <ScrollToTop smooth color="var(--black)"/>
            <header className="case-study_header">
                <h1>Yoga website</h1>
                <p className="case-study_emphasis">A website for my yoga business created with Next.js.</p>
            </header>
            <article className="case-study_container">
                <div>
                    <h3>About this project</h3>
                    <div className="case-study_intro">
                        <p>I've recreated my yoga website that I had previously created in WordPress and Next.js. I wanted a project that would allow me to learn Vue/Nuxt and Strapi. This gets data from Strapi but also posts to it with blog comments.
                            <br/>
                            <br />
                            Add more detail
                        </p>
                        <div>
                            <h4>Technologies</h4>
                            <ul>
                                <li>Nuxt 3</li>
                                <li>Strapi</li>
                                <li>GraphQL</li>
                                <li>Tailwind CSS</li>
                            </ul>
                            <h4>Links</h4>
                            <div className="case-study_links">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >
            <FaLink className="case-study_icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk/nuxt-yoga-strapi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="case-study_icon"  />
          </a>
        </div>
                        </div>
                    </div>
                </div>
                <h3>Stumbling blocks</h3>   
                <p>...</p>
                Replace image
               <img src="/images/yoga-website-blog.gif" alt="yoga website blog gif" className="case-study_imgs" loading="lazy" />
                <h3>Future improvements</h3>
                <ul>
                    <li>Booking system
                    </li>
                    <li>Ability to login as a student to book classes and cancel them.  
                    </li>
                </ul>

                <p>Visit my <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >Yoga website</a> or visit the  <a
          href="https://github.com/hellodeborahuk/nuxt-yoga-strapi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >Github repository</a> for this project.</p>
                <Link to="/"><button className="header-btn case-study_btn">Back to Projects</button></Link>
            </article>
            <Contact />
        </section>
     );
}
 
export default YogaNuxt; 
