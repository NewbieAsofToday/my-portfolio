import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Menu from "../components/Menu/Menu";
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
        <div className={styles.logo}>
          Euger Bonete
          <span className={styles.wave}>👋</span>
        </div>
        <div className={styles.links}>
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
        </div>
        <div className={styles.social}></div>
        <div className={styles.mobile}>
          {theme ? (
            <div className={styles.sun} onClick={() => setTheme(!theme)}>
              <FiSun />
            </div>
          ) : (
            <div className={styles.moon} onClick={() => setTheme(!theme)}>
              <IoMdMoon />
            </div>
          )}
          <div className={styles.menu} onClick={() => setModal(!modal)}>
            {modal ? (
              <div className={styles.spin}>
                <GrClose />
              </div>
            ) : (
              <div className={styles.flip}>
                <CgMenuRightAlt />
              </div>
            )}
            {modal && (
              <div
                style={{
                  background: theme ? "#fff" : "#333",
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
