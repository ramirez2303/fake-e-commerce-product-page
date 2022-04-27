import { ListItem } from "@chakra-ui/react";
import React from "react";

const Links = ({ children }) => {
  return (
    <>
      <ListItem
        alignItems="center"
        py="28px"
        color="secondary.200"
        paddingX={4}
        borderBottom="4px solid"
        borderColor="transparent"
        fontSize="sm"
        _hover={{
          color: "secondary.100",
          borderColor: "primary.100",
        }}
        cursor="pointer"
      >
        {children}
      </ListItem>
    </>
  );
};

export default Links;
