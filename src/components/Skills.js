import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { SiStrapi } from "react-icons/si";


const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <FaVuejs  className="skill-icon" />
        <p>Vue 3</p>
      </div>
      <div className="skill">
        <SiNuxtdotjs  className="skill-icon" />
        <p>Nuxt 3</p>
      </div>
      <div className="skill">
        <SiStrapi  className="skill-icon" />
        <p>Strapi </p>
      </div>
      <div className="skill">
        <FaReact className="skill-icon" />
        <p>React</p>
      </div>
      <div className="skill">
        <SiTailwindcss className="skill-icon" />
        <p>TailwindCSS</p>
      </div>
      <div className="skill">
        <FaFigma className="skill-icon" />
        <p>Figma</p>
      </div>
    </div>
  );
};

export default Skills;
