import { extendTheme } from "@chakra-ui/react";

export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "EB Garamond, serif",
    body: "IBM Plex Sans, sans-serif",
    code: "IBM Plex Mono, monospace",
  },
});
