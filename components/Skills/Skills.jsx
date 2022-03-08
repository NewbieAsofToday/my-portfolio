import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import styles from "./Skills.module.css";

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
const Skills = () => {
  return (
    <div id='skills' className={styles.container}>
      <Reveal keyframes={customAnimation} triggerOnce>
        <Reveal keyframes={customAnimation} triggerOnce>
          <h1>Tech-Stack</h1>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <ImHtmlFive2 />
            <p>HTML</p>
          </div>
          <div className={styles.gridItem}>
            <ImCss3 />
            <p>CSS</p>
          </div>
          <div className={styles.gridItem}>
            <SiJavascript />
            <p>Javascript</p>
          </div>
          <div className={styles.gridItem}>
            <DiGit />
            <p>Git</p>
          </div>
          <div className={styles.gridItem}>
            <FaReact />
            <p>ReactJS</p>
          </div>
          <div className={styles.gridItem}>
            <SiNextdotjs />
            <p>NextJS</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
