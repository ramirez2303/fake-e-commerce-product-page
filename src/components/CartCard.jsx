import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import useCount from "../hooks/useCount";
import useAdded from "../hooks/useAdded";
import CartIcon from "./CartIcon";
import CartBody from "./CartBody";

const CartCard = () => {
  const { count, setCount } = useCount();
  const { isAdded, setIsAdded } = useAdded();

  return (
    <Popover>
      <PopoverTrigger>
        <Stack w="40px" h="40px">
          <CartIcon isAdded={isAdded} count={count} />
        </Stack>
      </PopoverTrigger>
      <PopoverContent
        _focus={{ border: "none" }}
        boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          fontWeight="700"
          borderBottom="1px solid"
          borderColor="#ccc"
        >
          Cart
        </PopoverHeader>
        <PopoverBody>
          <Stack p="2">
            <CartBody
              count={count}
              setCount={setCount}
              isAdded={isAdded}
              setIsAdded={setIsAdded}
            />
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartCard;
