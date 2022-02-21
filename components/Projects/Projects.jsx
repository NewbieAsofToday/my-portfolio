import React from "react";
import { projectList } from "./projectData";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title'>Projects</h1>
      </div>
      <div id='projects' className='projects'>
        {projectList.map((item) => {
          return <ProjectCard item={item} key={item.id} />;
        })}
      </div>
      <style jsx>{`
        .container {
          width: 50%;
          margin-top: 40px;
        }
        .title {
          margin-top: 20px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 750px) {
          .container {
            width: 90%;
          }
          .projects {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
