import React from "react";
import Projects from "../components/Projects/Projects";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";

const projects = () => {
  return (
    <>
      <Hero />
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Projects />
      </motion.div>
    </>
  );
};

export default projects;
