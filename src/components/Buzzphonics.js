import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact"
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Buzzphonics = () => {
    return ( 
        <section className="case-study">
            <ScrollToTop smooth color="var(--black)"/>
            <header className="case-study_header">
                <h1>buzzphonics</h1>
                <p className="case-study_emphasis">Buzzphonics is a sounds app for parents and kids to learn Phase 2 and Phase 3 phonics.</p>
            </header>
            <article className="case-study_container">
                <div>
                    <h3>About this project</h3>
                    <div className="case-study_intro">
                        <div>
                          <p>I wanted to create a phonics app that I can save on my phone and have to hand when reading with my daughter who's just started learning to read. I often need to find out what a certain sound is and end up googling it every time. I need something quick and easy to click on specifically for using on my phone.</p>
                          <br/><p>I found lots of YouTube videos doing the sounds, but then I'd have to listen to every sound, rather than just the one I wanted. For me, I wanted a single page with buttons for each sound in Phase 2 and Phase 3 phonics, here in the UK.</p>
                        </div>
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
            href="https://focused-swirles-0bc3a1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >
            <FaLink className="case-study_icon" />
          </a>
          <a
            href="https://github.com/hellodeborahuk/buzzphonics"
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
                <iframe className="case-study_video" src="https://www.youtube.com/embed/shE4uhX8QIk?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                <h3>Requirements</h3>   
                <p>The requirements for the basic design was to have a Phase 2 and Phase 3 page with all the sounds. Then my daughter got involved and wanted some icons and games. She wanted to be able to use the app for learning and how could I say no to that?!</p>
                <h3>Implementation</h3>
                <p>I started with a basic 3-page layout using React and React Router. Initially, it was just going to be the home page with links to Phase 2 and Phase 3 sounds. The design changed slightly when I added the games.</p>
                <p>The first game I added was to pick the beginning sound of the image out of three choices. I set a lot of states to track the questions, the current question, the answer and whether the user is ready to move on to the next question. I wanted different questions to appear each time they took the quiz.</p>
                <img src="./images/buzzphonics-code1.png" alt="buzzphonics code example" className="case-study_imgs" loading="lazy"/>
                <p>The matching game took a little longer to figure out as I wasn't matching 2 identical images. I wanted to match the letter to an image, for example, "f" and a picture of a fox. When it came to shuffling the questions, or cards in this example, I needed to shuffle the desk first and then map the array.</p>
                <img src="./images/buzzphonics-code2.png" alt="buzzphonics code example" className="case-study_imgs" loading="lazy"/>
                <p>The final feature I added was a points system. For each game that is completed, the user gets a point. These are displayed on the home page and the Games page. I used useContext to track the points through the app. I saved the points to local storage.</p>
                <img src="./images/buzzphonics-code3.png" alt="buzzphonics code example" className="case-study_imgs" loading="lazy"/>
                <p>I decided last minute to add one more game, as my daughter kept asking me for one. This is a spelling game and more complex than the other two games. I started by writing pseudo code to see how the game would be laid out and how I would store the data. I created a cardDeck array that held the words, sounds and images. I then setup the desk by shuffling the sounds of the word and adding 3 random sounds, that weren't in the original word.</p>
                <img src="./images/buzzphonics-code4.png" alt="buzzphonics code example" className="case-study_imgs" loading="lazy"/>
                <p>At this point I took a break and designed a name and logo for the app. I also added another game, a reading game, based on the quiz. It's good to mix things up a bit.</p>
                <h3>What did I learn?</h3>
                <p>I have made a few React projects in the past but even though the site is quite simple there were a few things that got me googling.</p>
                <ul>
                  <li>useContext. I wanted a simple way to pass the points from the game to the main page. UseContext allowed me to manage the state globally across the app rather than drilling down props.</li>
                  <li>Building games. I'm not a gamer and I've really disliked all the games projects I've done while learning. My daughter wanted them so it was interesting to step back and draw out on paper the game play and work out what to code.</li>
                  <li>Using branches and pull requests in GitHub. It was my first experience using branches and pull requests on my own project.</li>
                </ul>
                <h3>Future improvements</h3>
                <ul>
                    <li>The ability to login and keep your points to yourself. My youngest wants to try and play too so being able to have their own accounts would be amazing.
                    </li>
                    <li>New games. If you have any other word game ideas please create an issue/discussion on GitHub.
                    </li>
                </ul>

                <p>Try out <a
            href="https://focused-swirles-0bc3a1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link"
          >buzzphonics</a> or visit the  <a
          href="https://github.com/hellodeborahuk/buzzphonics"
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
 
export default Buzzphonics; 
