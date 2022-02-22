import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ item }) => {
  const { title, image, short, demo } = item;
  return (
    <div className={styles.container}>
      <a href={demo} target='_blank' rel='noreferrer'>
        <img className={styles.card} src={image} alt='' />
      </a>
      <h2 className={styles.title}>{title}</h2>
      <p>{short}</p>
    </div>
  );
};

export default ProjectCard;
