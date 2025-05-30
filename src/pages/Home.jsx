import React from "react";
import Header from "../components/Header/Header.jsx";
import MainSection from "../components/Main/MainSection.jsx";
import QualitySection from "../components/Services/QualitySection.jsx";
import Education from "../components/Education/Education.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Projects from "../components/myProjects/Projects.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
      <QualitySection />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
