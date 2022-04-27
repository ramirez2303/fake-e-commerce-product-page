import React, { useContext } from "react";
import images from "../services/images";
import { Stack } from "@chakra-ui/react";

import FullViewContext from "../context/FullViewContext";
import ThumbnailContext from "../context/ThumbnailContext";
import ImageShadowCard from "./ImageShadowCard";
import ThumbnailBox from "./ThumbnailBox";

const ShadowCard = () => {
  const { selected, setSelected } = useContext(ThumbnailContext);
  const { showImage, setShowImage } = useContext(ThumbnailContext);
  const { imageComplete } = images;
  const { setImage } = useContext(FullViewContext);

  const handleThumbnailSelected = (index) => {
    setSelected(index);
  };

  const handleShowImage = (index) => {
    setShowImage(index);
  };

  const handleFullImage = () => setImage(false);

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
    <Stack
      display={{base:"none",md:"flex"}}
      position="absolute"
      bgColor="blackAlpha.700"
      w="100vw"
      h="100vh"
      zIndex="10"
    >
      <Stack
        w="fit-content"
        gap={4}
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        left="0"
        margin="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Stack>
          <ImageShadowCard
            handleFullImage={handleFullImage}
            imageComplete={imageComplete}
            showImage={showImage}
            handleLeftArrow={handleLeftArrow}
            handleRightArrow={handleRightArrow}
          />
        </Stack>
        <ThumbnailBox
          handleThumbnailSelected={handleThumbnailSelected}
          handleShowImage={handleShowImage}
          selected={selected}
        />
      </Stack>
    </Stack>
  );
};

export default ShadowCard;
