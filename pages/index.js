import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className={styles.title}>
        <h1>The home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          saepe necessitatibus sit iusto earum laboriosam explicabo nesciunt,
          suscipit facere amet illum culpa, ipsum cumque exercitationem
          voluptatem nulla, quisquam rem repudiandae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          saepe necessitatibus sit iusto earum laboriosam explicabo nesciunt,
          suscipit facere amet illum culpa, ipsum cumque exercitationem
          voluptatem nulla, quisquam rem repudiandae.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
