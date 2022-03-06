import { Button, Flex, VStack } from "@chakra-ui/react";

const RollerPanel = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <VStack spacing="12px" mr={2}>
        <Button>d100</Button>
        <Button>d48</Button>
        <Button colorScheme="red">d20</Button>
        <Button>d12</Button>
      </VStack>
      <VStack spacing="12px" ml={2}>
        <Button>d10</Button>
        <Button>d8</Button>
        <Button>d4</Button>
        <Button>coin</Button>
      </VStack>
    </Flex>
  );
};

export default RollerPanel;
