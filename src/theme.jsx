import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      fontFamily: "'Kumbh Sans', sans-serif",
    },
  },
};

const colors = {
  primary: {
    100: "hsl(26, 100%, 55%)",
    200: "hsl(25, 100%, 94%)",
  },
  secondary: {
    100: "hsl(220, 13%, 13%)",
    200: "hsl(219, 9%, 45%)",
    300: "hsl(220, 14%, 75)",
    400: "hsl(223, 64%, 98%)",
  },
};

export default extendTheme({ config, colors, styles });
