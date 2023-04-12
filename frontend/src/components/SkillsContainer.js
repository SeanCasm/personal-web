import React, { useEffect, useState } from "react";
import SkillItem from "./SkillItem.js";
const SkillContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./bd/knowledges-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.knowledges.sort((a, b) => b.pts - a.pts)))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {}, [data]);
  return (
    <section>
      <div>
        <h1>Habilidades</h1>
      </div>
      <div>
        <h3>Programación</h3>
      </div>
      <div className="container">
        <ul className="row">
          {data.map((skill) => {
            return <SkillItem key={skill.name} {...skill} />;
          })}
        </ul>
      </div>
    </section>
  );
};

SkillContainer.propTypes = {};

export default SkillContainer;
