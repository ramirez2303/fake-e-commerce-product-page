import { useContext } from "react";
import AddedContext from "../context/AddedContext";

export default function useGlobalGifs() {
  const { isAdded, setIsAdded } = useContext(AddedContext);
  return { isAdded, setIsAdded };
}
