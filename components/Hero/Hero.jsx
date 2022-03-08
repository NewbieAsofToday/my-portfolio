import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import { GiHand } from "react-icons/gi";

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

const Hero = () => {
  return (
    <div className='container'>
      <Reveal keyframes={customAnimation} triggerOnce>
        <img className={styles.cat} src='/cat.gif' alt='' />
        <h2 className={styles.heroText}>
          Hello,
          <span className={styles.span}>
            {/* 👋 */}
            <GiHand />
            &nbsp;
          </span>
          I&apos;m a front-end developer.
        </h2>
      </Reveal>

      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
