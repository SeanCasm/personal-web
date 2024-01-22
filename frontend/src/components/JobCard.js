import React from "react";

export const JobCard = ({ job }) => {
  const concatTime = (job = {}) => {
    return job.start + " - " + job.finish;
  };
  return (
    <li
      className="card text-white bg-dark col-md"
      style={{ maxWidth: "18rem" }}
    >
      <header className="card-header">{job.company}</header>
      <section className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{concatTime(job)}</p>
        <p>{job.time}</p>
      </section>
    </li>
  );
};
