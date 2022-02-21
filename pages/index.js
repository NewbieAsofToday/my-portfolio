import Head from "next/head";
import Link from "next/link";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
// import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <Hero />
      <About />
      <Skills />
    </>
  );
}
