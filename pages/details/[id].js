import Link from "next/link";
import React from "react";
import { projectList } from "../../components/Projects/projectData";
import styles from "./DetailsPage.module.css";
import { BsGithub } from "react-icons/bs";
import { GiTv } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";

import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX( -100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const getStaticPaths = async () => {
  const data = projectList;
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = projectList[id - 1];
  return {
    props: {
      item: data,
    },
  };
};

const DetailsPage = ({ item }) => {
  return (
    <>
      <Reveal className={styles.container} keyframes={customAnimation}>
        <div className={styles.title}>
          <span>
            <Link href={"/"}>
              <BsArrowLeft />
            </Link>
          </span>
          <h1>{item.title}</h1>
        </div>
        <img className={styles.image} src={item.image} alt='' />
        <div className={styles.links}>
          <a href={item.demo} target='_blank' rel='noreferrer'>
            Live: <GiTv />
          </a>
          <a href={item.demo} target='_blank' rel='noreferrer'>
            Github: <BsGithub />
          </a>
        </div>
        <div className={styles.tags}>
          {item.tags.map((tag) => {
            return (
              <p key={tag} className={styles.tag}>
                {tag}
              </p>
            );
          })}
        </div>
        <div className={styles.desc}>
          <p>{item.about}</p>
        </div>
      </Reveal>
    </>
  );
};

export default DetailsPage;
