import { Stack } from "@chakra-ui/react";
import React from "react";
import NavLinks from "./NavLinks";
import RightNavComp from "./RightNavComp";
import LeftNavComp from "./LeftNavComp";

const NavBar = () => {
  return (
    <Stack
      w="auto"
      h={{ base: "70px", md: "80px" }}
      px={{ md: "10" }}
      direction="row"
      justifyContent={{ base: "space-around", md: "space-between" }}
      borderBottom="1px solid"
      borderColor="#ccc"
      mb={{ base: "0", md: "16" }}
      py="28px"
    >
      <Stack direction="row" alignItems="center" gap={{ base: "2", md: "10" }}>
        <LeftNavComp />
        <NavLinks />
      </Stack>
      <Stack direction="row" alignItems="center">
        <RightNavComp />
      </Stack>
    </Stack>
  );
};

export default NavBar;
