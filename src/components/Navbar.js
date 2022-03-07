import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import ThemeButton from "./ThemeButton";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Flex h="100%" justifyContent="space-between" alignItems="center">
      <Flex align="center" justify="start">
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

        <Text ml={5} fontFamily="heading" fontSize={22}>
          Roll your bones. Click on bones to remove.
        </Text>
      </Flex>

      <ThemeButton />
    </Flex>
  );
};

export default Navbar;
