import { IconButton, Image, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import images from "../services/images";
import Thumbnail from "./Thumbnail";
import FullViewContext from "../context/FullViewContext";
import ThumbnailContext from "../context/ThumbnailContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const LeftPage = () => {
  const { selected, setSelected } = useContext(ThumbnailContext);
  const { showImage, setShowImage } = useContext(ThumbnailContext);
  const { thumbnail, imageComplete } = images;
  const { setImage } = useContext(FullViewContext);

  const handleThumbnailSelected = (index) => {
    setSelected(index);
  };

  const handleShowImage = (index) => {
    setShowImage(index);
  };

  const handleFullImage = () => setImage(true);

  const handleLeftArrow = () => {
    if (selected === 1) {
      setSelected(4);
      setShowImage(3);
    } else {
      setSelected(selected - 1);
      setShowImage(showImage - 1);
    }
  };

  const handleRightArrow = () => {
    if (selected === 4) {
      setSelected(1);
      setShowImage(0);
    } else {
      setSelected(selected + 1);
      setShowImage(showImage + 1);
    }
  };

  return (
    <Stack gap={4}>
      <Stack>
        <Image
          src={imageComplete[showImage]}
          borderRadius={{ base: "0", md: "2xl" }}
          w={{ base: "100%", md: "sm" }}
          onClick={handleFullImage}
          cursor="pointer"
        />
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={
            <ChevronLeftIcon
              _hover={{ color: "primary.100" }}
              transition="0.1s ease-in-out"
            />
          }
          isRound="full"
          fontSize="3xl"
          position="absolute"
          top={{ base: "30%", sm: "50%" }}
          left="10px"
          onClick={handleLeftArrow}
        />
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={
            <ChevronRightIcon
              _hover={{ color: "primary.100" }}
              transition="0.1s ease-in-out"
            />
          }
          isRound="full"
          fontSize="3xl"
          position="absolute"
          top={{ base: "30%", sm: "50%" }}
          right="10px"
          onClick={handleRightArrow}
        />
      </Stack>
      <Stack
        direction="row"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        w="sm"
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
              zIndex={0}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default LeftPage;
