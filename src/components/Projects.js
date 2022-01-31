import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <article className="project-card">
          <div className="project-img-container">
            <img
              src="../images/notes.png"
              alt="Notes App"
              className="project-img"
            />
            <div className="project-img-background mid"></div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Notes app</h3>
            <p>
              A CRUD application to store and edit notes using React and
              TailwindCSS.
            </p>
            <div className="project-tech">
              <p>React</p>
              <p>TailwindCSS</p>
            </div>
            <div className="project-links">
              <Link to="notes">Case study</Link>
              <a href="https://awesome-lamport-4fcaff.netlify.app/">Live</a>
              <a href="https://github.com/hellodeborahuk/coding-notebook">
                GitHub
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-img-container">
            <img
              src="../images/yoga-website.png"
              alt="Notes App"
              className="project-img"
            />
            <div className="project-img-background yellow"></div>
          </div>
          <div className="project-details swap">
            <h3 className="project-title">Yoga Website</h3>
            <p className="project-copy">
              A website for my yoga business created with Next.js. The blog
              posts are in a database using Firestore.
            </p>
            <div className="project-tech">
              <p>Next.js</p>
              <p>Firebase</p>
            </div>
            <div className="project-links">
              <a href="/">Case study</a>
              <a href="/">Live</a>
              <a href="/">GitHub</a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-img-container">
            <img
              src="../images/dosha.png"
              alt="Dosha quiz"
              className="project-img"
            />
            <div className="project-img-background pale"></div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Ayurveda Dosha Quiz</h3>
            <p className="project-copy">
              I created a quiz from scratch to implement what I've learnt about
              React.
            </p>
            <div className="project-tech">
              <p>React</p>
              <p>TailwindCSS</p>
            </div>
            <div className="project-links">
              <Link to="dosha">Case study</Link>
              <a href="https://cranky-curran-3d406a.netlify.app/">Live</a>
              <a href="https://github.com/hellodeborahuk/dosha-quiz">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
