const Projects = () => {
  const project = [
    {
      name: "Notes App",
      thumbnail: "./media/notes.png",
      copy: "A CRUD application to store and edit notes using React and TailwindCSS.",
      caseStudy: "/Notes",
      link: "https://awesome-lamport-4fcaff.netlify.app/",
      github: "https://github.com/hellodeborahuk/coding-notebook",
    },
    {
      name: "React Weather App",
      thumbnail: "./media/react-weather.png",
      copy: "A weather app built with React and API intergration for my SheCodes Workshop project.",
      caseStudy: "/WeatherApp",
      link: "https://ecstatic-swartz-7b404c.netlify.app/",
      github: "https://github.com/hellodeborahuk/react-weather-app",
    },
    {
      name: "Ayurveda Dosha Quiz",
      thumbnail: "./media/dosha-quiz.png",
      copy: "I created a quiz from scratch to implement what I've learnt about React.",
      caseStudy: "/Dosha",
      link: "https://cranky-curran-3d406a.netlify.app/",
      github: "https://github.com/hellodeborahuk/dosha-quiz",
    },
  ];

  return (
    <section>
      <h3 className="projects-title">Projects</h3>
      <div className="projects">
        {project.map(function (project, index) {
            return (
              <article key={index} className="project-card">
                <img src={project.thumbnail} alt="project-title" />
                <div className="project-details">
                  <h4>{project.name}</h4>
                  <p>{project.copy}</p>
                  <div>
                    <>React</>
                    <>TailwindCSS</>
                  </div>
                  <div>
                    <>Case study</>
                    <>Live</>
                    <>GitHub</>
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
