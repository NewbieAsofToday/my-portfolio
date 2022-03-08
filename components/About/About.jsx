import React from "react";
import styles from "./About.module.css";
import { FiHeart } from "react-icons/fi";
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

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <Reveal keyframes={customAnimation} triggerOnce>
        <Reveal keyframes={customAnimation} triggerOnce delay={250}>
          <h1>About me</h1>
        </Reveal>
        <p className={styles.desc}>
          I am Euger Bonete. I like to teach myself how to code. I am passionate
          about coding and I am constantly learning more about web development.
          I am currently learning
          <strong> NextJS,</strong> and headless CMS like{" "}
          <strong>strapi </strong>
          and some concepts like authentication and state management tools.
        </p>
        <p className={styles.desc}>
          I am a fast learner and so far I am enjoying my web development
          journey and I am improving my coding skills everyday by building
          projects.
        </p>
        <p>
          Download my &nbsp;
          <span className={styles.download}>
            <strong>
              <a
                href='/resume.pdf'
                alt='resume'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
              </a>
            </strong>
            .
          </span>
        </p>
        <h1>
          I <FiHeart />
        </h1>
        <p className={styles.desc}>Cats, Music, Drawing, Anime and Guitar.</p>
      </Reveal>
    </div>
  );
};

export default About;
