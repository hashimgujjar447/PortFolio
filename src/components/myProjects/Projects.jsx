import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "To-Do List App",
    description:
      "This is a simple Todo application built with React. It allows users to add, delete, and mark tasks as completed.",
    githubLink: "https://github.com/hashimgujjar447/React_Todo_App",
  },
  {
    title: "Weather App",
    description: "Displays real-time weather using an API.",
    githubLink: "https://github.com/hashimgujjar447/React_Weather_App",
  },
  {
    title: "Currency Converter",
    description: "This project is a simple currency converter application.",
    githubLink: "https://github.com/hashimgujjar447/React_Currency_Converter",
  },
  {
    title: "React E-commerce",
    description:
      "This project is a fully functional e-commerce application built using React and Vite. It includes features such as product listing, shopping cart, order management, and responsive design for a seamless user experience.",
    githubLink: "https://github.com/hashimgujjar447/React_Ecommerce",
  },
  {
    title: "GreenCart",
    description:
      "GreenCart is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to offer an eco-friendly shopping experience. It promotes sustainable products and empowers users to make environmentally conscious purchasing decisions.",
    githubLink: "https://github.com/hashimgujjar447/GreenCart",
  },

  // Add more projects here if you want
];

const Projects = () => {
  return (
    <section className="section-projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
