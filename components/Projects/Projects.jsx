import React from "react";
import { projectList } from "./projectData";
import ProjectCard from "./ProjectCard";

import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY( 100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Projects = () => {
  return (
    <>
      <div className='container' id='projects'>
        <Reveal keyframes={customAnimation}>
          <h1 className='title'>Selected Works </h1>
        </Reveal>
      </div>
      <Reveal keyframes={customAnimation} delay={250}>
        <div className='projects'>
          {projectList.map((item) => {
            return <ProjectCard item={item} key={item.id} />;
          })}
        </div>
      </Reveal>
      <style jsx>{`
        .container {
          width: 50%;
          padding-top: 12vh;
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
