import { useContext } from "react";
import CartCountContext from "../context/cartCountContext";

export default function useGlobalGifs() {
  const { count, setCount } = useContext(CartCountContext);
  return { count, setCount };
}
