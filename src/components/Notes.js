import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Contact from "./Contact"
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Notes = () => {
    return ( 
        <section className="case-study">
            <ScrollToTop smooth color="var(--black)"/>
            <header className="case-study_header">
                <h1>Notes app</h1>
                <p className="case-study_emphasis">A CRUD application to store and edit notes.</p>
            </header>
            <article className="case-study_container">
                <div>
                    <h3>About this project</h3>
                    <div className="case-study_intro">
                        <p>I wanted to create an CRUD project that would allow me to track my notes from #100DaysOfCode challenge on Twitter. If you'd rather hear me walkthrough this project, watch the video below.
<br/><br/>
I followed a <a className="case-study_a" href="https://www.youtube.com/watch?v=8KB3DHI-QbM" target="_blank"
            rel="noopener noreferrer">tutorial on YouTube</a> where I encountered issues as I wanted inputs from two fields. This was also a challenge when it came to searching within the two fields.</p>
                        <div>
                            <h4>Technologies</h4>
                            <ul>
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>HTML5</li>
                            </ul>
                            <h4>Links</h4>
                            <div className="case-study_links">
          <a
            href="https://awesome-lamport-4fcaff.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >
            <FaLink className="case-study_icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk/coding-notebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="case-study_icon"  />
          </a>
          <a
            href="https://www.youtube.com/watch?v=shE4uhX8QIk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="case-study_icon"  />
          </a>
        </div>
                        </div>
                    </div>
                </div>
                <iframe className="case-study_video" src="https://www.youtube.com/embed/shE4uhX8QIk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Stumbling blocks</h3>   
                <p>I decided to use Tailwind CSS as it's something I've recently been learning and I really liked how simple it was to create the look of the note component, similar to a window. After the initial setup of the notes and saving them to local storage, I added tagging functionality. I could now add and remove multiple tags from each note.
                </p>
                <br/>
                <p>With the ability to add tags, I thought it would be useful to filter notes by tag so I added a filter button next to the search.</p>
                <br/>   
                <p>To create the edit functionality I had to refactor my components so that the form stood alone but also was included in the Note. The Note component contains two further components: the form and the note view. This meant went the edit button was clicked it would show the form and when saved it would show the note view.</p>
                <img src="./images/add-new-note.gif" alt="gif of adding a new note" className="case-study_imgs" loading="lazy" />
                <h3>Future improvements</h3>
                <ul>
                    <li>Save information to a database.
                    </li>
                    <li>Ability to login.

                    </li>
                    <li>Pin notes to the top or mark as favourite.
                    </li>
                </ul>

                <p>Try out the <a
            href="https://awesome-lamport-4fcaff.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >Notes App</a> or visit the  <a
          href="https://github.com/hellodeborahuk/dosha-quiz"
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
 
export default Notes; 
