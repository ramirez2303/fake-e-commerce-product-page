import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import menuIcon from "../images/icon-menu.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HamburgerIcon
        ref={btnRef}
        bg="none"
        onClick={onOpen}
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        w="20px"
        h="20px"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Stack mt={12} gap={3}>
              <Text fontSize="lg" fontWeight="700">
                Collections
              </Text>
              <Text fontSize="lg" fontWeight="700">
                Men
              </Text>
              <Text fontSize="lg" fontWeight="700">
                Women
              </Text>
              <Text fontSize="lg" fontWeight="700">
                About
              </Text>
              <Text fontSize="lg" fontWeight="700">
                Contact
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
