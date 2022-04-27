import React, { useState } from "react";

const Context = React.createContext({});

export function FullViewContextProvider({ children }) {
  const [image, setImage] = useState(false);

  return (
    <Context.Provider value={{ image, setImage }}>{children}</Context.Provider>
  );
}

export default Context;
