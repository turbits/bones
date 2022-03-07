import { extendTheme } from "@chakra-ui/react";

export const config = {
  initialColorMode: "dark",
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
