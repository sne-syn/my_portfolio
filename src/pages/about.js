import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";
import about from "../constants/about";

const query = graphql`
  {
    file(relativePath: { eq: "sne-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const { title, desc, stack } = about;
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{desc}</p>
            <div className="about-stack">
              {stack.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
