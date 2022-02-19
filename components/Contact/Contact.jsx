import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Connect with me</h1>
      <div className={styles.icons}>
        <div className={styles.logo}>
          <FiFacebook />
        </div>
        <div className={styles.logo}>
          <FiGithub />
        </div>
        <div className={styles.logo}>
          <FiLinkedin />
        </div>
        <div className={styles.logo}>
          <FiMail />
        </div>
      </div>
    </div>
  );
};

export default Contact;
