import React from "react";
import "./Header.css";

const Header = (): JSX.Element => {
  return (
    <div className={"header"}>
      <strong>SHINE INT</strong>
      <input placeholder={"Search"} />
    </div>
  );
};

export default Header;
