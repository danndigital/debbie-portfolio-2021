import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <article className="project-card">
          <div className="project-img-container mid">
            <img
              src="/images/notes.png"
              alt="Notes App"
              className="project-img"
              loading="lazy"
            />
          </div>
          <div className="project-details">
            <h3 className="project-title">Notes app</h3>
            <p>
              A CRUD application to store and edit notes using React and
              Tailwind CSS.
            </p>
            <div className="project-tech">
              <p>React</p>
              <p>Tailwind CSS</p>
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
          <div className="project-img-container yellow">
            <img
              src="/images/buzzphonics.png"
              alt="buzzphonics"
              className="project-img"
              loading="lazy"
            />
          </div>
          <div className="project-details swap">
            <h3 className="project-title">buzzphonics</h3>
            <p className="project-copy">
            Buzzphonics is a sounds app for parents and kids to learn Phase 2 and Phase 3 phonics in the UK.
            </p>
            <div className="project-tech">
              <p>React</p>
            </div>
            <div className="project-links">
            <Link to="buzzphonics">Case study</Link>
              <a href="https://focused-swirles-0bc3a1.netlify.app/">Live</a>
              <a href="https://github.com/hellodeborahuk/buzzphonics">GitHub</a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-img-container pale">
            <img
              src="/images/yoga-website.webp"
              alt="Yoga website"
              className="project-img"
              loading="lazy"
            />
          </div>
          <div className="project-details">
            <h3 className="project-title">Yoga website</h3>
            <p className="project-copy">
            A website for my yoga business created with Next.js. It has a markdown blog using gray-matter and marked.
            </p>
            <div className="project-tech">
              <p>Next.js</p>
            </div>
            <div className="project-links">
              <Link to="yoga">Case study</Link>
              <a href="https://relaxed-noether-4fba77.netlify.app/">Live</a>
              <a href="https://github.com/hellodeborahuk/yoga-site">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
