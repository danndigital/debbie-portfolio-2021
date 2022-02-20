import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact"
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Yoga = () => {
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
                        <p>I have a yoga website created with WordPress and I wanted to try and recreate it with Next.js. It needed a very basic blog and information about the classes.<br/><br/>The plan in the future is to create a booking system. This will be a team effort as I prefer working with frontend frameworks.</p>
  
                        <div>
                            <h4>Technologies</h4>
                            <ul>
                                <li>Next</li>
                                <li>Firebase</li>
                            </ul>
                            <h4>Links</h4>
                            <div className="case-study_links">
          <a
            href="https://relaxed-noether-4fba77.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >
            <FaLink className="case-study_icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk/yoga-site"
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
                <p>The biggest issue here was replicating the blog posts that were so easy to do in WordPress. I didn't want a full CMS system so I started with a data.JSON file with the blog information and first paragraph. I choose Firebase to experiment with it, and it was really simple to get the database setup. However I couldn't figure out how to store multiple paragraphs of data. 
                </p>
                <br/>
               <img src="/images/yoga-website-blog.gif" alt="yoga website blog gif" className="case-study_imgs" loading="lazy" />
                <h3>Future improvements</h3>
                <ul>
                    <li>Booking system
                    </li>
                    <li>Ability to login as student and admin.  
                    </li>
                </ul>

                <p>Visit my <a
            href="https://relaxed-noether-4fba77.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >Yoga website</a> or visit the  <a
          href="https://github.com/hellodeborahuk/yoga-site"
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
 
export default Yoga; 
