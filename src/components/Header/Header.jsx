import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.navbar}>
      <h2 className={style.logo}>wrist.watch</h2>
    </div>
  );
};

export default Header;
