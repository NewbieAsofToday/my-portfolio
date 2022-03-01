import Link from "next/link";
import React from "react";
import { projectList } from "../../components/Projects/projectData";
import styles from "./DetailsPage.module.css";
import { BsCode } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
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
            <Link href={"#projects"}>
              <BsArrowLeft />
            </Link>
          </span>
          <h1>{item.title}</h1>
        </div>
        <img className={styles.image} src={item.image} alt='' />
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
          <p style={{ lineHeight: "30px" }}>{item.about}</p>
        </div>
        <div className={styles.links}>
          <div>
            <a href={item.demo} target='_blank' rel='noreferrer'>
              <FaEye /> Demo
            </a>
          </div>
          <div>
            <a href={item.demo} target='_blank' rel='noreferrer'>
              <BsCode /> Code
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default DetailsPage;
