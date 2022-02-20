import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ item }) => {
  const { title, image, short } = item;
  return (
    <div className={styles.container}>
      <img className={styles.card} src={image} alt='' />
      <h2 className={styles.title}>{title}</h2>
      <p>{short}</p>
    </div>
  );
};

export default ProjectCard;
