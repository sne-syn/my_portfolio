import React from "react";
import Title from "./Title";
import jobsInfo from "../constants/jobs";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "gatsby";

const Jobs = () => {
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobsInfo[value];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobsInfo.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
                key={item.id}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  );
};

export default Jobs;
