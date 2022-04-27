import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProductInformation = () => {
  return (
    <>
      <Stack>
        <Text
          fontWeight="700"
          color="primary.100"
          fontSize="sm"
          textTransform="uppercase"
        >
          Sneaker Company
        </Text>
        <Heading>Fall Limited Edition Sneakers</Heading>
      </Stack>
      <Stack gap={4}>
        <Text fontSize="sm" color="gray.500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Text>
        <Stack
          direction={{ base: "row", md: "column" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Text fontSize="xl" fontWeight="700">
              $125.00
            </Text>
            <Text
              fontSize="sm"
              bgColor="orange.100"
              color="primary.100"
              fontWeight="700"
            >
              50%
            </Text>
          </Stack>
          <Text
            textDecorationLine="line-through"
            color="gray.400"
            fontSize="sm"
            fontWeight="700"
          >
            $250.00
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductInformation;
