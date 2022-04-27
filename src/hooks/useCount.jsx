import { useContext } from "react";
import CartCountContext from "../context/CartCountContext";

export default function useGlobalGifs() {
  const { count, setCount } = useContext(CartCountContext);
  return { count, setCount };
}
