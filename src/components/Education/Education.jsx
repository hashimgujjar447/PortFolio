import React from "react";
import "./Education.css";

const ExperienceItem = ({ year, title, location }) => (
  <div className="box">
    <span>{year}</span>
    <h3>{title}</h3>
    <p>{location}</p>
  </div>
);

const EducationItem = ({ year, degree, institution }) => (
  <div className="box">
    <span>{year}</span>
    <h3>{degree}</h3>
    <p>{institution}</p>
  </div>
);

const Education = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Self Developer",
      location: "Faisalabad, Pakistan",
    },
    {
      year: "2024 - 2025",
      title: "Full Stack Web Developer",
      location: "Faisalabad, Pakistan",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      location: "Faisalabad, Pakistan",
    },
  ];

  const educations = [
    {
      year: "2024 - Present",
      degree: "Bs Computer Science",
      institution: "UOE Lahore",
    },
    {
      year: "2021 - 2023",
      degree: "Intermediate In Computer",
      institution: "Samundri, Pakistan",
    },
    {
      year: "2019 - 2021",
      degree: "Matric (Science)",
      institution: "Samundri, Pakistan",
    },
  ];

  return (
    <section className="resume" id="experience">
      <div className="grid grid-two--cols">
        <div className="experience">
          <h2 className="experience-heading">My Experience</h2>
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              year={exp.year}
              title={exp.title}
              location={exp.location}
            />
          ))}
        </div>
        <div className="education">
          <h2 className="education-heading">My Education</h2>
          {educations.map((edu, idx) => (
            <EducationItem
              key={idx}
              year={edu.year}
              degree={edu.degree}
              institution={edu.institution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
