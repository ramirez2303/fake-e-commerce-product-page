import { IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ isAdded, count }) => {
  return (
    <>
      <IconButton
        icon={<AiOutlineShoppingCart size="20px" />}
        bg="none"
        isRound="full"
        p={0}
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        _focus={{ border: "none" }}
      />
      <Text
        display={isAdded && count !== 0 ? "flex" : "none"}
        color={{ base: "transparent", xl: "#fff" }}
        position="absolute"
        top={{ base: "-1", lg: "3.5" }}
        right={{ base: "24", xl: "420" }}
        borderRadius="md"
        px="1.5"
        bgColor={{ base: "", xl: "primary.100" }}
        fontSize="10px"
      >
        {count}
      </Text>
    </>
  );
};

export default CartIcon;
