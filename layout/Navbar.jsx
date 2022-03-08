import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { FaCat } from "react-icons/fa";

import { Reveal, Flip, Rotate, Bounce, Roll } from "react-awesome-reveal";
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
const sunAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-21px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const moonAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Navbar = ({ setTheme, theme }) => {
  const [modal, setModal] = useState(false);
  return (
    <nav
      className={styles.container}
      style={{
        background: theme ? "rgba(32, 32, 35)" : "rgba(240, 231, 219)",
      }}
    >
      <Reveal keyframes={customAnimation}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a style={{ color: theme ? "white" : "black" }}>
                Euger Bonete
                <span className={styles.wave}>
                  <FaCat />
                </span>
              </a>
            </Link>
          </div>
          <div
            className={styles.links}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          >
            <Link href={"#projects"}>
              <a className='color'>Works</a>
            </Link>
            <Link href={"#contact"}>
              <a className='color'>Contact</a>
            </Link>

            <style jsx>{`
              .color {
                color: ${theme ? "#fff" : "#000"};
              }
            `}</style>
          </div>
          <div
            initial={{ x: "50vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={styles.mobile}
          >
            {theme ? (
              <Reveal keyframes={sunAnimation}>
                <div className={styles.sun} onClick={() => setTheme(!theme)}>
                  <FiSun className={styles.flip} />
                </div>
              </Reveal>
            ) : (
              <Reveal keyframes={moonAnimation}>
                <div className={styles.moon} onClick={() => setTheme(!theme)}>
                  <IoMdMoon className={styles.flip2} />
                </div>
              </Reveal>
            )}
            <div className={styles.menu} onClick={() => setModal(!modal)}>
              {modal ? (
                <Rotate>
                  <MdClose fontSize={"2rem"} />
                </Rotate>
              ) : (
                <Roll cascade>
                  <CgMenuRightAlt fontSize={"2rem"} />
                </Roll>
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
                  <Link href={"/"}>
                    <a className='color'>About</a>
                  </Link>
                  <Link href={"#projects"}>
                    <a className='color'>Projects</a>
                  </Link>
                  <Link href={"#contact"}>
                    <a className='color'>Contact</a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </nav>
  );
};

export default Navbar;
