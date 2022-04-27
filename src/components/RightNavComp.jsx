import { Avatar, Stack } from "@chakra-ui/react";
import React from "react";
import avatar from "../images/image-avatar.png";
import CartCard from "./CartCard";

const RightNavComp = () => {
  return (
    <Stack direction="row" gap={8} alignItems="center">
      <CartCard />
      <Stack
        borderRadius="full"
        border="2px solid"
        borderColor="transparent"
        _hover={{ borderColor: "primary.100" }}
      >
        <Avatar src={avatar} size="sm" cursor="pointer" />
      </Stack>
    </Stack>
  );
};

export default RightNavComp;
