import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Thumbnail = ({
  handleThumbnailSelected,
  handleShowImage,
  selected,
  index,
  i,
  smImg,
  zIndex,
}) => {
  return (
    <Box>
      <Box
        w="82px"
        h="82px"
        borderRadius="lg"
        position="absolute"
        border="3px solid"
        borderColor={index === selected ? "primary.100" : "transparent"}
        bgColor={index === selected ? "#fff" : ""}
      ></Box>
      <Image
        id={index}
        src={smImg}
        w="80px"
        borderRadius="lg"
        cursor="pointer"
        filter={index === selected ? "opacity(40%)" : "opacity(100%)"}
        _hover={{ filter: "opacity(60%)" }}
        onClick={() => {
          handleThumbnailSelected(index);
          handleShowImage(i);
        }}
        zIndex={zIndex}
      />
    </Box>
  );
};

export default Thumbnail;
