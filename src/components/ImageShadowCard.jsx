import React from "react";
import { IconButton, Image } from "@chakra-ui/react";
import {
  SmallCloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const ImageShadowCard = ({
  handleFullImage,
  imageComplete,
  showImage,
  handleLeftArrow,
  handleRightArrow,
}) => {
  return (
    <>
      <SmallCloseIcon
        alignSelf="flex-end"
        color="#fff"
        _hover={{ color: "primary.100" }}
        transition="0.1s ease-in-out"
        w={8}
        h={8}
        onClick={handleFullImage}
        cursor="pointer"
      />
      <Image
        src={imageComplete[showImage]}
        borderRadius={{ base: "0", md: "2xl" }}
        w={{ base: "100%", md: "lg" }}
      />
      <IconButton
        icon={
          <ChevronLeftIcon
            _hover={{ color: "primary.100" }}
            transition="0.1s ease-in-out"
          />
        }
        isRound="full"
        fontSize="3xl"
        position="absolute"
        top="320px"
        right="490px"
        onClick={handleLeftArrow}
      />
      <IconButton
        icon={
          <ChevronRightIcon
            _hover={{ color: "primary.100" }}
            transition="0.1s ease-in-out"
          />
        }
        isRound="full"
        fontSize="3xl"
        position="absolute"
        top="320px"
        left="490px"
        onClick={handleRightArrow}
      />
    </>
  );
};

export default ImageShadowCard;
