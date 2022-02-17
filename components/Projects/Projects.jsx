import React from "react";
import { projectList } from "./projectData";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div>
      {projectList.map((item) => {
        return <ProjectCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projects;
