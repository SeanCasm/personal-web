import React from "react";
import exp from "../data/exp.json";
import { JobCard } from "./JobCard";

export const Experience = () => {
  return (
    <>
      <h1>Experiencia</h1>
      <ul className="row">
        {exp.map((e) => {
          return <JobCard job={e} />;
        })}
      </ul>
    </>
  );
};

export default Experience;
