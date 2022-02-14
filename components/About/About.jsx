import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1>About me</h1>
      <p className={styles.desc}>
        I am Euger Bonete. I like to teach myself how to code. I am passionate
        about coding and I am constantly learning more about web development. I
        am currently learning
        <strong> NextJS, strapi </strong>
        and some concepts like authentication and state management tools.
      </p>
      <p className={styles.desc}>
        So far I am enjoying the journey and I am improving my coding skills
        everyday by building stuff.
      </p>
    </div>
  );
};

export default About;
