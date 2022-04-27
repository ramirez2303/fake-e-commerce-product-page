import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CartInfo from "./CartInfo";

const CartBody = ({ count, setCount, isAdded, setIsAdded }) => {
  return (
    <Stack gap={3}>
      {count > 0 && isAdded ? (
        <>
          <CartInfo
            cartCount={count}
            setCount={setCount}
            setIsAdded={setIsAdded}
          />{" "}
          <Button colorScheme="orange">Checkout</Button>
        </>
      ) : (
        <Stack w="100%" h="150px" justifyContent="center" alignItems="center">
          <Text fontSize="sm" fontWeight="700" color="#888" w="fit-content">
            Your cart is empty.
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export default CartBody;
