import React from "react";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
const ProjectCard = ({ item }) => {
  const { title, image, short, demo, id } = item;
  return (
    <div className={styles.container}>
      <Link href={`/details/${id}`}>
        <img className={styles.card} src={image} alt='' />
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <p>{short}</p>
    </div>
  );
};

export default ProjectCard;
