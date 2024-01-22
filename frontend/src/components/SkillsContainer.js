import React from "react";
import knowledges from "../data/knowledges-data.json";
import SkillItem from "./SkillItem.js";
const SkillContainer = () => {
  return (
    <section>
      <h1>Conocimientos</h1>
      <div className="container">
        <ul className="row">
          {knowledges.data.map((k) => {
            return <SkillItem key={k.name} {...k} />;
          })}
        </ul>
      </div>
    </section>
  );
};

SkillContainer.propTypes = {};

export default SkillContainer;
