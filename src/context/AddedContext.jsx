import React, { useState } from "react";

const Context = React.createContext({});

export function AddedContextProvider({ children }) {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Context.Provider value={{ isAdded, setIsAdded }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
