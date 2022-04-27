import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import LeftPage from "../components/LeftPage";
import RightPage from "../components/RightPage";

const ProductPage = () => {
  return (
    <Stack
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      gap={{ base: "3", md: "20" }}
    >
      <Stack w={{ base: "100%", md: "50%" }} alignItems="center">
        <LeftPage />
      </Stack>
      <Stack w={{ base: "100%", md: "50%" }} alignItems="center" px={6}>
        <RightPage />
      </Stack>
    </Stack>
  );
};

export default ProductPage;
