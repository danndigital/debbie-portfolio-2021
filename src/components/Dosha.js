import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact"
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Dosha = () => {
    return ( 
        <section className="case-study">
            <ScrollToTop smooth color="var(--black)"/>
            <header className="case-study_header">
                <h1>Ayurveda Dosha Quiz</h1>
                <p className="case-study_emphasis">A quiz to tell you your Dosha, created with React.</p>
            </header>
            <article className="case-study_container">
                <div>
                    <h3>About this project</h3>
                    <div className="case-study_intro">
                        <p>I wanted to build a project on my own. First up I created a design for the dosha quiz in Figma and found a colour scheme I liked the look of. I wanted a quiz where when you select an option and it would remember what you've counted and let you know at the end how many of each button you'd selected.<br/><br/>From the initial design, I decided to use a next question button rather than a back button. I personally don't feel like you need to go backwards on such a quiz.</p>
                        <div>
                            <h4>Technologies</h4>
                            <ul>
                                <li>React</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                                <li>Figma</li>
                            </ul>
                            <h4>Links</h4>
                            <div className="case-study_links">
          <a
            href="https://cranky-curran-3d406a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >
            <FaLink className="case-study_icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk/dosha-quiz"
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
                <iframe className="case-study_video" src="https://www.youtube.com/embed/shE4uhX8QIk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Stumbling blocks</h3>   
                <p>To get the initial design and questions up was relatively straightforward. Where I got stuck was with trying to count how many of each button had been clicked (a, b or c). Whichever had the most clicks was the answer. I reached out to the community for some guidance and was given some direction which helped me figure out how to do this. I filtered the results array and used the length of the filtered array to count the a, b and c's. To work out which was clicked the most I used if statements.</p>
                <img src="./images/dosha-quiz-code.png" alt="dosha quiz code block" className="case-study_imgs" loading="lazy" />
                <h3>Future improvements</h3>
                <ul>
                    <li>I want to create a pie chart with results in to show what percentage of each dosha someone is.
                    </li>
                    <li>Add the ability to go back and change your answer.
                    </li>
                    <li>A reset button on the results page to try the quiz again.
                    </li>
                </ul>
                <img src="./images/dosha-quiz.png" alt="dosha quiz questions example" className="case-study_imgs" loading="lazy" />

                <p>Try out the <a
            href="https://cranky-curran-3d406a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >Dosha Quiz</a> or visit the  <a
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
 
export default Dosha; 
