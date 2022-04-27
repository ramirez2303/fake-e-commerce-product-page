import { Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import useCount from "../hooks/useCount";

const CartCount = () => {
  const { count, setCount } = useCount(0);

  const handleAddProduct = () => {
    setCount(count + 1);
  };

  const handleSubtractProduct = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      borderRadius="lg"
      bgColor="#ddd"
      w={{ base: "100%", md: "220px" }}
    >
      <Stack w="40px" h="45px" justifyContent="center" alignItems="center">
        <Image
          w="12px"
          src={minusIcon}
          onClick={handleSubtractProduct}
          cursor="pointer"
          _hover={{ filter: "brightness(75%)" }}
        />
      </Stack>
      <Stack w="10px" h="45px" justifyContent="center" alignItems="center">
        <Text>{count}</Text>
      </Stack>
      <Stack w="40px" h="45px" justifyContent="center" alignItems="center">
        <Image
          w="12px"
          src={plusIcon}
          onClick={handleAddProduct}
          cursor="pointer"
          _hover={{ filter: "brightness(75%)" }}
        />
      </Stack>
    </Stack>
  );
};

export default CartCount;
