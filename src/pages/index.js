import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" showLink />
    </Layout>
  );
};
