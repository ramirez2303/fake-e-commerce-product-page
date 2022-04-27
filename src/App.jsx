import { Box, Stack } from "@chakra-ui/react";
import ProductPage from "./components/ProductPage";
import NavBar from "./components/NavBar";
import ShadowCard from "./components/ShadowCard";
import { useContext } from "react";
import FullViewContext from "./context/FullViewContext";

function App() {
  const { image } = useContext(FullViewContext);
  return (
    <Box className="App">
      <Stack
        w={{ base: "100%", sm: "auto", lg: "1000px" }}
        h="100vh"
        margin="auto"
        spacing={0}
      >
        <NavBar />
        <Stack
          display={image ? "flex" : "none"}
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          left="0"
          margin="auto"
        >
          <ShadowCard />
        </Stack>
        <ProductPage />
      </Stack>
    </Box>
  );
}

export default App;
