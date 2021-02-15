import React from "react";
import { FaTelegramPlane, FaFacebook, FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://github.com/sne-syn",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/snizhana-syngur-782a2884/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://newgit.anadea.co/sss",
  },
  {
    id: 4,
    icon: <FaTelegramPlane className="social-icon"></FaTelegramPlane>,
    url: "tg://resolve?domain=Sne_Syn",
  },
  {
    id: 5,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com/snezhana.singur",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
