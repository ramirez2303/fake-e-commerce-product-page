import React, { useState } from "react";

const Context = React.createContext({});

export function CartCountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}

export default Context;
