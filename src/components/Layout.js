import { Box, Flex, Grid } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Grid
      h="100vh"
      templateRows="64px 1fr"
      templateColumns="10px 1fr 10px"
      gap="0px 0px"
      gridTemplateAreas={`'navbar navbar navbar' 'content content content'`}
    >
      <Box gridArea="navbar" borderBottomWidth="1px">
        <Navbar />
      </Box>

      <Box
        gridArea="content"
        padding={4}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex
          h="100%"
          width="100%"
          maxH="100vh"
          flexDir="column"
          justifyContent="start"
          alignItems="center"
        >
          {children}
        </Flex>
      </Box>
    </Grid>
  );
};

export default Layout;
