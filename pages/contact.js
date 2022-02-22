import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero/Hero";
import { motion } from "framer-motion";

const contact = () => {
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
    <motion.div
      className={styles.container}
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Hero />
      <div>
        <h1>Contact </h1>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.name}>
            <label>Name </label>
            <input placeholder='Name' type='text' name='name' />
          </div>

          <div className={styles.email}>
            <label>Email </label>
            <input placeholder='@gmail.com' type='email' name='email' />
          </div>

          <div className={styles.message}>
            <label>Message </label>
            <textarea placeholder='Message' name='message' rows='6' cols='20' />
          </div>
          <div className={styles.send}>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default contact;
