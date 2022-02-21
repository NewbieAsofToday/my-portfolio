import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero/Hero";

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
      )
      .then(alert("Message sent!"));
  };

  return (
    <>
      <Hero />
      <div className={styles.container}>
        <h1>Contact </h1>
        <form className={styles.form} onSubmit={sendEmail}>
          <div>
            <label>Name </label>
            <input type='text' name='name' />
          </div>
          <div>
            <label>Email </label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>Message </label>
            <textarea name='message' rows='10' cols='30' />
          </div>
          <div>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    </>
  );
};

export default contact;
