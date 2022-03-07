import {
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Input,
  List,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Fragment, useCallback, useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import bone from "../assets/bone.png";
import boneDi from "../assets/bonedi.png";
import boneTri from "../assets/bonetri.png";

const Application = () => {
  const [customBonesValue, setCustomBonesValue] = useState(null);
  const [totalBonesValue, setTotalBonesValue] = useState(null);
  const [bones, setBones] = useState([]);
  const { colorMode } = useColorMode();

  // const format = (val) => `d` + val;
  // const parse = (val) => val.replace(/^\d/, "");

  const handleAddBone = useCallback(
    (value) => {
      setTotalBonesValue(totalBonesValue + value);
      setBones([...bones, value]);
    },
    [bones, totalBonesValue]
  );

  const handleRemoveBone = useCallback(
    (index) => {
      console.log(index);
      const _boneInArray = bones[index];
      setTotalBonesValue(totalBonesValue - _boneInArray);

      const _bones = bones
        .slice(0, index)
        .concat(bones.slice(index + 1, bones.length));
      setBones(_bones);

      console.log(bones);
    },
    [bones, totalBonesValue]
  );

  const handleClearBones = useCallback(() => {
    setBones([]);
    setTotalBonesValue(0);
  }, []);

  return (
    <Fragment>
      {/* outputs */}
      <Flex
        w="100%"
        h="100%"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        gridArea="content"
        flexDir="column"
        align="start"
        justify="start"
        padding={2}
      >
        <List spacing={2}>
          {bones.map((value, index) => {
            return (
              <ListItem
                width="96px"
                height="96px"
                key={index}
                bg={colorMode === "light" ? "gray.200" : "gray.700"}
                padding={1}
                position="relative"
                value={value}
                cursor="pointer"
                onClick={() => handleRemoveBone(index)}
              >
                <Flex w="100%" h="100%" align="center" justify="center">
                  {value === 20 && <Image src={boneDi} w="100%" />}
                  {value % 3 === 0 && value !== 20 && (
                    <Image src={boneTri} w="100%" />
                  )}
                  {value % 3 !== 0 && value !== 20 && (
                    <Image src={bone} w="100%" />
                  )}
                  <Text
                    pos="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                  >
                    d{value}
                  </Text>
                </Flex>
              </ListItem>
            );
          })}
        </List>
      </Flex>

      {/* inputs */}
      <Flex align="start" justify="center">
        {/* count */}
        <Flex flexDir="column" alignItems="center" justify="center" mr={6}>
          <Heading mb={2}>How Many</Heading>
          <Flex wrap="nowrap" direction="row" align="center" justify="center">
            <Input variant="filled" placeholder="1" mr="5px" />
            <Button />
          </Flex>
          <Button mt="5px" onClick={() => handleClearBones()}>
            Clear All Bones
          </Button>
        </Flex>

        {/* common */}
        <Flex flexDir="column" alignItems="center" justify="center" mr={6}>
          <Heading mb={2}>Common</Heading>
          <Grid
            templateColumns="1fr 1fr 1fr 1fr"
            templateRows="1fr 1fr"
            gridGap="5px"
          >
            <Button onClick={() => handleAddBone(100)}>d100</Button>
            <Button onClick={() => handleAddBone(48)}>d48</Button>
            <Button onClick={() => handleAddBone(20)}>d20</Button>
            <Button onClick={() => handleAddBone(12)}>d12</Button>
            <Button onClick={() => handleAddBone(10)}>d10</Button>
            <Button onClick={() => handleAddBone(8)}>d8</Button>
            <Button onClick={() => handleAddBone(4)}>d4</Button>
            <Button onClick={() => handleAddBone(2)}>coin</Button>
          </Grid>
        </Flex>

        {/* custom inputs */}
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          ml={6}
        >
          <Heading mb={2}>Custom</Heading>
          <Flex
            flexWrap="nowrap"
            justifyContent="flex-start"
            alignItems="center"
            mr={4}
          >
            <NumberInput
              variant="filled"
              defaultValue={2}
              min={2}
              mr="5px"
              onChange={(val) => setCustomBonesValue(val)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <IconButton
              aria-label="use custom face count"
              icon={<CheckIcon />}
              onClick={() => handleAddBone(customBonesValue)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Application;
