import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className='container'>
      <Image className='cat' height={265} width={265} src='/cat.gif' alt='' />
      <div className={styles.heroText}>
        <h2 className={(styles.text, styles.t1)}>
          Hello there, I am a
          <span className={styles.textclass}> front-end developer.</span>
        </h2>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Hero;
