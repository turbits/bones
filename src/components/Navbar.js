import { Flex, Heading, Image, useColorMode } from "@chakra-ui/react";

import ThemeButton from "./ThemeButton";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex h="100%" justifyContent="space-between" alignItems="center">
      <Flex
        w="240px"
        p={4}
        alignItems="center"
        justifyContent="space-around"
        borderRightWidth="1px"
        padding={2}
      >
        <Image
          src={logo}
          width={12}
          height={12}
          alt="Bones (the application) logo"
        ></Image>
        <Heading>BONES</Heading>
      </Flex>

      <ThemeButton />
    </Flex>
  );
};

export default Navbar;
