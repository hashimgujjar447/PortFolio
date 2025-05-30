import React from "react";
import "./Contact.css";

const ContactInfoItem = ({ iconClass, label, info }) => (
  <div className="contact-info-item contact-flex">
    <i className={iconClass}></i>
    <div className="inner-dic">
      <p className="contact-name">{label}</p>
      <p className="contact-info">{info}</p>
    </div>
  </div>
);

const Contact = () => {
  const contactDetails = [
    {
      iconClass: "fa-solid fa-phone",
      label: "Phone",
      info: "+923093185090",
    },
    {
      iconClass: "fa-solid fa-envelope",
      label: "Email",
      info: "hashimgujjar4447@gmail.com",
    },
    {
      iconClass: "fa-solid fa-location-dot",
      label: "Address",
      info: "Chak no 447 g.b Faisalabad",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="grid grid-two--cols contact-text">
        <div className="contact-form">
          <h2 className="contact-heading">Let’s work together!</h2>
          <p className="contact-subHeading">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
        </div>
        <div className="contact-information">
          {contactDetails.map(({ iconClass, label, info }, idx) => (
            <ContactInfoItem
              key={idx}
              iconClass={iconClass}
              label={label}
              info={info}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
