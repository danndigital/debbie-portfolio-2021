const Projects = () => {
  const project = [
    {
      name: "Notes App",
      thumbnail: "../images/notes.png",
      copy: "A CRUD application to store and edit notes using React and TailwindCSS.",
      caseStudy: "/Notes",
      link: "https://awesome-lamport-4fcaff.netlify.app/",
      github: "https://github.com/hellodeborahuk/coding-notebook",
    },
    {
      name: "React Weather App",
      thumbnail: "../images/yoga-website.png",
      copy: "A weather app built with React and API intergration for my SheCodes Workshop project.",
      caseStudy: "/WeatherApp",
      link: "https://ecstatic-swartz-7b404c.netlify.app/",
      github: "https://github.com/hellodeborahuk/react-weather-app",
    },
    {
      name: "Ayurveda Dosha Quiz",
      thumbnail: "../images/dosha.png",
      copy: "I created a quiz from scratch to implement what I've learnt about React.",
      caseStudy: "/Dosha",
      link: "https://cranky-curran-3d406a.netlify.app/",
      github: "https://github.com/hellodeborahuk/dosha-quiz",
    },
  ];

  return (
    <section>
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        {project.map(function (project, index) {
            return (
              <article key={index} className="project-card">
                <div className="project-img-container">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="project-img"
                  />
                  <div className="project-img-background"></div>
                </div>
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <div>
                    <p>React</p>
                    <p>TailwindCSS</p>
                  </div>
                  <div>
                    <a href="/">Case study</a>
                    <a href="/">Live</a>
                    <a href="/">GitHub</a>
                  </div>
                </div>
              </article>
            );
        })}
      </div>
    </section>
  );
};

export default Projects;
