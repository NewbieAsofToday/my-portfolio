import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Menu from "../components/Menu/Menu";
const Navbar = ({ setTheme, theme }) => {
  const [modal, setModal] = useState(false);
  return (
    <nav
      className={styles.nav}
      style={{
        background: theme ? "rgba(32, 32, 35)" : "rgba(240, 231, 219)",
      }}
    >
      <div className={styles.logo}>
        Euger Bonete
        <span className={styles.wave}>👋</span>
      </div>
      <div className={styles.links}>
        <Link className='color' href='#projects'>
          Projects
        </Link>
        <a className='color' href=''>
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
      <div
        className={styles.mode}
        style={{
          background: theme ? "#fbd38d" : "#805ad5",
          color: theme ? "#000" : "#fff",
        }}
        onClick={() => setTheme(!theme)}
      >
        {theme ? (
          <FiSun className={styles.sun} />
        ) : (
          <FiMoon className={styles.moon} />
        )}
      </div>
      <div className={styles.menu} onClick={() => setModal(!modal)}>
        {modal ? <GrClose /> : <CgMenuRightAlt />}
      </div>
    </nav>
  );
};

export default Navbar;
