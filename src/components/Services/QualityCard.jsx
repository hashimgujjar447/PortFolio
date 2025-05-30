// QualityCard.jsx
import React from "react";
import "./QualitySection.css"; // if you're styling separately

const QualityCard = ({ number, title, description }) => {
  return (
    <a className="activeQuantity" href="#">
      <div className="quality-1">
        <h2>
          {number} <span>{title}</span>
        </h2>
        <p className="removep">
          {description.split("\n")[0]} <br />
          {description.split("\n")[1]}
        </p>
        <p className="addp">{description.replace(/\n/g, " ")}</p>
        <i className="fa-solid fa-arrow-down-long"></i>
      </div>
    </a>
  );
};

export default QualityCard;
