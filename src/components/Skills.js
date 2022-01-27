import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";


const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <FaHtml5 className="skill-icon" />
        <p>HTML</p>
      </div>
      <div className="skill">
        <FaCss3 className="skill-icon" />
        <p>CSS</p>
      </div>
      <div className="skill">
        <SiJavascript className="skill-icon" />
        <p>JavaScript</p>
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
