import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AddButton from "./AddButton";
import CartCount from "./CartCount";
import ProductInformation from "./ProductInformation";

const RightPage = () => {
  return (
    <Stack h="100%" justifyContent="center" gap={2}>
      <ProductInformation />
      <Stack direction={{ base: "column", md: "row" }} gap={4}>
        <CartCount />
        <AddButton />
      </Stack>
    </Stack>
  );
};

export default RightPage;
