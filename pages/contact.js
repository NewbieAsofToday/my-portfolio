import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k73iuhd",
        "template_7yqv51p",
        e.target,
        "user_s9kcAcIs0xEN53FZGdHoi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className={styles.container}
        id='contact'
        style={{ paddingTop: "10vh" }}
      >
        <Reveal keyframes={customAnimation}>
          <div>
            <Reveal keyframes={customAnimation}>
              <h1>Contact</h1>
            </Reveal>

            <div className={styles.social}>
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
                <BsFacebook />
              </a>

              <a
                href='https://gmail.com/azkriven17'
                target='_blank'
                rel='noreferrer'
                className={styles.a}
              >
                <SiGmail />
              </a>
            </div>
            <form className={styles.form} onSubmit={sendEmail}>
              {/* <div className={styles.name}>
              <label>Name </label>
              <input placeholder='Name' type='text' name='name' />
            </div> */}

              <div className={styles.email}>
                <label>Email </label>
                <input placeholder='@gmail.com' type='email' name='email' />
              </div>

              <div className={styles.message}>
                <label>Message </label>
                <textarea
                  placeholder='Message'
                  name='message'
                  rows='6'
                  cols='20'
                />
              </div>
              <div className={styles.send}>
                <input type='submit' value='Send' />
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Contact;
