import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesAll = technologies.map((eachTech) => (
    <span key={eachTech}>{eachTech}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesAll}</div>
    </div>
  );
}

console.log(ProjectItem)
export default ProjectItem;
