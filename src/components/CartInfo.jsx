import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import cartImage from "../images/image-product-1-thumbnail.jpg";
import trashIcon from "../images/icon-delete.svg";
import React from "react";

const CartInfo = ({ cartCount, setCount, setIsAdded }) => {
  const handleDeleteCart = () => {
    setCount(0);
    setIsAdded(false);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Image src={cartImage} w="50px" borderRadius="md" />
      <Stack spacing={0}>
        <Text fontSize="sm" color="#999">
          Fall Limited Edition Sneakers
        </Text>
        <Flex alignItems="center" gap={2}>
          <Text fontSize="md" color="#999">
            {`$125.00 x ${cartCount}`}
          </Text>
          <Text fontSize="md" fontWeight="700">{` $${
            cartCount * 125
          }.00`}</Text>
        </Flex>
      </Stack>
      <Image
        src={trashIcon}
        w={3}
        h={4}
        onClick={handleDeleteCart}
        cursor="pointer"
        _hover={{ filter: "brightness(85%)", transition: "0.07s ease-in-out" }}
      />
    </Flex>
  );
};

export default CartInfo;
