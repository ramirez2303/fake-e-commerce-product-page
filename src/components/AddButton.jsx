import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAdded from "../hooks/useAdded";

const AddButton = () => {
  const { setIsAdded } = useAdded();

  const handleAddProduct = () => {
    setIsAdded(true);
  };

  return (
    <>
      <Button
        leftIcon={<AiOutlineShoppingCart />}
        colorScheme="orange"
        w="100%"
        h="45px"
        onClick={handleAddProduct}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddButton;
