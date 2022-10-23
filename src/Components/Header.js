import React from "react";
import Nav from "./Nav";
import Imgcontainer from "./Imgcontainer";
import Headerbotton from "./Headerbotton";

const Header = (props) => {
    const { categories } = props
  return (
    <header>
        <Nav categories={categories}/>
        <Imgcontainer />
        <Headerbotton />
    </header>
  );
};

export default Header;
