import React from "react";
import Title from "./Title";
import services from "../constants/services";
const Services = () => {
  return (
    <section className="section bg-gray">
      <Title title="services" />
      <ul className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <li key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Services;
