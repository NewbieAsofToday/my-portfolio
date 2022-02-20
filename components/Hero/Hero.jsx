import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className='container'>
      <Image
        className='cat'
        width={"200vw"}
        height={"200vh"}
        src='/cat.gif'
        alt=''
      />
      <div className={styles.heroText}>Front-End Developer</div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 50px;
        }
        .cat {
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;
