import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import projects from "../constants/projects";

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
