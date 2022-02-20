import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
const Navbar = ({ setTheme, theme }) => {
  const [modal, setModal] = useState(false);
  return (
    <nav
      className={styles.container}
      style={{
        background: theme ? "rgba(32, 32, 35)" : "rgba(240, 231, 219)",
      }}
    >
      <div className={styles.nav}>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={styles.logo}
        >
          Euger Bonete
          <span className={styles.wave}>👋</span>
        </motion.div>
        <motion.div
          className={styles.links}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        >
          <a className='color' href={"#projects"}>
            Projects
          </a>
          <a className='color' href={"#about"}>
            About
          </a>
          <a className='color' href={"#skills"}>
            Skills
          </a>
          <style jsx>{`
            .color {
              color: ${theme ? "#fff" : "#000"};
            }
          `}</style>
        </motion.div>
        <motion.div
          initial={{ x: "50vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={styles.mobile}
        >
          {theme ? (
            <div className={styles.sun} onClick={() => setTheme(!theme)}>
              <FiSun className={styles.flip} />
            </div>
          ) : (
            <div className={styles.moon} onClick={() => setTheme(!theme)}>
              <IoMdMoon className={styles.flip2} />
            </div>
          )}
          <div className={styles.menu} onClick={() => setModal(!modal)}>
            {modal ? (
              <div className={styles.spin}>
                <VscChromeClose />
              </div>
            ) : (
              <div className={styles.flip}>
                <CgMenuRightAlt />
              </div>
            )}
            {modal && (
              <div
                style={{
                  background: theme
                    ? "rgba(240, 231, 219,0.8)"
                    : "rgba(32, 32, 35,0.5)",
                  color: theme ? "#000" : "#fff",
                }}
                className={styles.menuItems}
              >
                <a>Projects</a>
                <a>About</a>
                <a>Skills</a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
