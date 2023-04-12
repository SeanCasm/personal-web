import React from "react";
const SkillItem = ({ name = "", pts = 0 }) => {
  return (
    <li className="col-md-6 mt-3 ">
      <p className="text-center">{name}</p>
      <div className="m-auto progress w-75">
        <div
          className={`progress-bar skills__${name.toLowerCase()} ${pts>=60 && "higher-skill"}`}
          role="progressbar"
          style={{ width: pts + "%" }}
          aria-valuenow={pts}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </li>
  );
};

SkillItem.propTypes = {};

export default SkillItem;
