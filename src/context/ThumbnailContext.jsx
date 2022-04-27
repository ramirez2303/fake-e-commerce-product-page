import React, { useState } from "react";

const Context = React.createContext({});

export function ThumbnailContextProvider({ children }) {
  const [selected, setSelected] = useState(1);
  const [showImage, setShowImage] = useState(0);

  return (
    <Context.Provider
      value={{ selected, setSelected, showImage, setShowImage }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
