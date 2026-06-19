import React from "react";

import header from "./Header.module.css";

const Header = () => {
  return (
    <div className={header.header}>
      <h3>Sheryians</h3>
      <button className="btn">Login</button>
    </div>
  );
};

export default Header;
