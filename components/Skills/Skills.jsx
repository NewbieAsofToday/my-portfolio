import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <div id='skills' className={styles.container}>
      <h1>Tech-Stack</h1>
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
          <p>React JS</p>
        </div>
        <div className={styles.gridItem}>
          <SiNextdotjs />
          <p>Next JS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
