import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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
        Hello, <span className={styles.span}>👋</span> my name is
        <span className={styles.bold}>Euger.</span>
      </h2>
      <p className={styles.p}>
        <Link href=''>
          <a className={styles.a}>
            <BsGithub />
          </a>
        </Link>
        <Link href=''>
          <a className={styles.a}>
            <BsTwitter />
          </a>
        </Link>
        <Link href=''>
          <a className={styles.a}>
            <BsMessenger />
          </a>
        </Link>
        <Link href=''>
          <a className={styles.a}>
            <SiGmail />
          </a>
        </Link>
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
