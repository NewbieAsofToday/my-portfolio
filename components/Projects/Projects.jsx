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
          width: 60%;
        }
        .title {
          font-size: 1.6rem;
          font-weight: 900;
        }
        .projects {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 2000px) {
          .projects {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 1150px) {
          .container {
            width: 70%;
          }
          .projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 650px) {
          .container {
            width: 80%;
          }
          .projects {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media (max-width: 350px) {
        }
      `}</style>
    </>
  );
};

export default Projects;
