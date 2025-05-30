import React from "react";
import "./Skills.css";

// Skill data array for easy management and scalability
const skillData = [
  { img: "figma.webp", alt: "Figma", percent: "92%", label: "Figma" },
  { img: "html.webp", alt: "HTML", percent: "92%", label: "Html" },
  { img: "/css.png", alt: "CSS", percent: "80%", label: "CSS" },
  { img: "/js.png", alt: "JavaScript", percent: "99%", label: "Javascript" },
  { img: "/react.webp", alt: "React", percent: "85%", label: "React" },
  { img: "./nj.png", alt: "Node Js", percent: "94%", label: "Node Js" },
];

// Skill item as a reusable component
const SkillItem = ({ img, alt, percent, label }) => (
  <div className="skills">
    <div className="innerSkull">
      <img src={img} alt={alt} />
      <p>{percent}</p>
    </div>
    <p className="skill-minorheading">{label}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="sectionSkills" id="skill">
      <div className="skillText">
        <h2 className="skill-heading">My Skills</h2>
        <p className="skill-subheading">
          We put your ideas and thus your wishes in the form of a unique web
          project that
          <br />
          inspires you and your customers.
        </p>
      </div>
      <div className="skillFlex">
        {skillData.map((skill, idx) => (
          <SkillItem key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
