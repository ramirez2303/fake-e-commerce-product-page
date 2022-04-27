import { Image } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo.svg";
import Menu from "./Menu";

const LeftNavComp = () => {
  return (
    <>
      <Menu />
      <Image src={logo} pb={1} cursor="pointer" />
    </>
  );
};

export default LeftNavComp;
