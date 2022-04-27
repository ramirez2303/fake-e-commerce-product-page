import { Stack } from "@chakra-ui/react";
import React from "react";
import Thumbnail from "./Thumbnail";
import images from "../services/images";

const ThumbnailBox = ({
  handleThumbnailSelected,
  handleShowImage,
  selected,
}) => {
  const { thumbnail } = images;
  return (
    <Stack
      direction="row"
      display={{ base: "none", md: "flex" }}
      justifyContent="space-evenly"
      margin="auto"
      w="md"
    >
      {thumbnail.map((item, i) => {
        const index = i + 1;
        return (
          <Thumbnail
            key={i}
            handleThumbnailSelected={handleThumbnailSelected}
            handleShowImage={handleShowImage}
            selected={selected}
            index={index}
            i={i}
            smImg={item}
            zIndex={999}
          />
        );
      })}
    </Stack>
  );
};

export default ThumbnailBox;
