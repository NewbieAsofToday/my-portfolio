import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ item }) => {
  const { title, image } = item;
  return (
    <div>
      <p>{title}</p>
      <img className={styles.card} src={image} alt='' />
    </div>
  );
};

export default ProjectCard;
