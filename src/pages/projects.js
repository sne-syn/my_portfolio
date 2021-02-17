import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import projects from "../constants/projects";
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

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All projects" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
