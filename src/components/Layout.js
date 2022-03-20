import { Box, Flex, Grid, Link, useColorMode } from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Fragment>
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

      <Link
        href="https://github.com/turbits/bones/issues"
        isExternal
        pos="fixed"
        bottom="0"
        left="0"
        p={2}
        m={0}
        fontFamily="heading"
        fontWeight="800"
        bg={colorMode === "light" ? "gray.300" : "gray.700"}
        borderTopRightRadius={5}
      >
        <Flex justify="center" align="center">
          GitHub Issues
          <ExternalLinkIcon ml={2} />
        </Flex>
      </Link>
    </Fragment>
  );
};

export default Layout;
