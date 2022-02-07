import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninjas.module.css";
export async function getStaticProps() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
}
const index = ({ ninjas }) => {
  console.log(ninjas);
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
