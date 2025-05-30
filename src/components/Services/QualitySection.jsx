import React from "react";
import "./QualitySection.css";
import QualityCard from "./QualityCard.jsx";

const qualities = [
  {
    number: "01",
    title: "Branding Design",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging interfaces that enhance user satisfaction and drive business success.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications tailored to your business needs.",
  },
  {
    number: "04",
    title: "Consultancy",
    description:
      "Providing expert advice to help you make informed decisions and achieve your digital goals.",
  },
];

const QualitySection = () => (
  <section className="my-qualities" id="service">
    <h2 className="quality-heading">My Quality Services</h2>
    <p className="quality-subheading">
      I transform your ideas into unique web projects that inspire you and your
      customers.
    </p>
    <div className="quality-div">
      {qualities.map((item) => (
        <QualityCard
          key={item.number}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </section>
);

export default QualitySection;
