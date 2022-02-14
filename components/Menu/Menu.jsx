import React from "react";
import styled from "./Menu.module.css";
const Menu = ({ theme }) => {
  return (
    <div
      className={styled.overlay}
      style={{
        background: theme ? "rgba(32, 32, 35,0.5)" : "rgba(32, 32, 35,0.5)",
        color: theme ? "#fff" : "#fff",
      }}
    >
      <a>Menu</a>
    </div>
  );
};

export default Menu;
