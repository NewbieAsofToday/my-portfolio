import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ item }) => {
  const { title, image, tags } = item;
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <img className={styles.card} src={image} alt='' />

      <div className={styles.tagContainer}>
        {tags.map((tag, index) => (
          <p key={tag + index + 1} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
