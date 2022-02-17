import React from "react";
import styles from "./About.module.css";
import { FiHeart } from "react-icons/fi";
const About = () => {
  return (
    <div id='about' className={styles.container}>
      <h1>About me</h1>
      <p className={styles.desc}>
        I am Euger Bonete. I like to teach myself how to code. I am passionate
        about coding and I am constantly learning more about web development. I
        am currently learning
        <strong> NextJS, strapi </strong>
        and some concepts like authentication and state management tools.
      </p>
      <p className={styles.desc}>
        I am a fast learner and so far I am enjoying my web development journey
        and I am improving my coding skills everyday by building projects.
      </p>
      <h1>
        I <FiHeart />
      </h1>
      <p className={styles.desc}>Cats, Music, Drawing, Anime and Guitar.</p>
    </div>
  );
};

export default About;
