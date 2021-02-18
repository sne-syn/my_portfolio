import React from "react";
import PropTypes from "prop-types";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
  {
    allFile(filter: { name: { regex: "/projects/" } }, sort: { fields: name }) {
      nodes {
        publicURL
      }
    }
  }
`;

const Project = ({ description, title, github, stack, url, index }) => {
  const projectsImages = useStaticQuery(query).allFile.nodes;
  return (
    <article className="project">
      <img
        src={projectsImages[index].publicURL}
        className="project-img"
        alt="project's intarface preview"
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>

        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((stackItem) => {
            return (
              <span className="project" key={stackItem.id}>
                {stackItem.title}
              </span>
            );
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Project;
