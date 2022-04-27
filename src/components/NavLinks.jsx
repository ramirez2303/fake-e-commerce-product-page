import { List, Stack } from "@chakra-ui/react";
import React from "react";
import Links from "./Links";

const NavLinks = () => {
  return (
    <List display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
      <Stack direction="row" alignItems="center">
        <Links>Collections</Links>
        <Links>Men</Links>
        <Links>Women</Links>
        <Links>About</Links>
        <Links>Contact</Links>
      </Stack>
    </List>
  );
};

export default NavLinks;
