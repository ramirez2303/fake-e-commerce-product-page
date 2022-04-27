import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { FullViewContextProvider } from "./context/FullViewContext";
import { ThumbnailContextProvider } from "./context/ThumbnailContext";
// import { CartCountContextProvider } from "./context/cartCountContext";
import { CartCountContextProvider } from "./context/CartCountContext";
import { AddedContextProvider } from "./context/AddedContext";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <FullViewContextProvider>
        <ThumbnailContextProvider>
          <AddedContextProvider>
            <CartCountContextProvider>
              <App />
            </CartCountContextProvider>
          </AddedContextProvider>
        </ThumbnailContextProvider>
      </FullViewContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
