import React from "react";
import Nav from "./Nav";
import Imgcontainer from "./Imgcontainer";

const Header = (props) => {
    const { categories } = props
  return (
    <header>
        <Nav categories={categories}/>
        <Imgcontainer />
    </header>
  );
};

export default Header;
