import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GiHand } from "react-icons/gi";

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
      <h2 className={styles.heroText}>
        Hello,
        <span className={styles.span}>
          {/* 👋 */}
          <GiHand />
        </span>
        I&apos;m a front-end developer.
      </h2>
      <p className={styles.p}>
        <a
          href='https://github.com/newbieAsofToday/'
          target='_blank'
          rel='noreferrer'
          className={styles.a}
        >
          <BsGithub />
        </a>

        <a
          href='https://twitter.com/EugerBonete'
          target='_blank'
          rel='noreferrer'
          className={styles.a}
        >
          <BsTwitter />
        </a>

        <a
          href='https://web.facebook.com/euger.bonete.9'
          target='_blank'
          rel='noreferrer'
          className={styles.a}
        >
          <BsMessenger />
        </a>

        <a
          href='https://web.facebook.com/euger.bonete.9'
          target='_blank'
          rel='noreferrer'
          className={styles.a}
        >
          <SiGmail />
        </a>
      </p>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;
        }
        .cat {
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;
