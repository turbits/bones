import "../lib/GetBone";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorMode,
} from "@chakra-ui/react";
import { Fragment, useCallback, useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import { GetBoneElement } from "../lib/GetBone";

const Application = () => {
  const [customBonesValue, setCustomBonesValue] = useState(100);
  const [totalBonesValue, setTotalBonesValue] = useState(0);
  const [bones, setBones] = useState([]);
  const [shouldCoinAddToTotal, setShouldCoinAddToTotal] = useState(false);
  const { colorMode } = useColorMode();

  const handleAddBone = useCallback(
    (faceCount, isPercentile = false) => {
      const min = 1;
      const max = Math.ceil(faceCount);
      const boneValue = () => {
        if (isPercentile) {
          return Math.ceil((Math.random() * (max - min) + min) / 10) * 10;
        } else {
          return Math.round(Math.random() * (max - min) + min);
        }
      };
      let _value = boneValue();
      const boneElement = GetBoneElement(faceCount, _value);

      if (!shouldCoinAddToTotal) {
        _value = faceCount === 2 ? 0 : _value;
      }

      setTotalBonesValue(totalBonesValue + _value);
      setBones([...bones, [_value, boneElement]]);
    },
    [bones, totalBonesValue, shouldCoinAddToTotal]
  );

  const handleRemoveBone = useCallback(
    (index) => {
      const _bone = bones[index];
      const _boneValue = _bone[0];
      setTotalBonesValue(totalBonesValue - _boneValue);

      const _bones = bones
        .slice(0, index)
        .concat(bones.slice(index + 1, bones.length));
      setBones(_bones);
    },
    [bones, totalBonesValue]
  );

  const handleClearBones = useCallback(() => {
    setBones([]);
    setTotalBonesValue(0);
  }, []);

  return (
    <Fragment>
      {/* total */}
      <Box mb={5}>
        <Heading>
          Total: {Number.isNaN(totalBonesValue) ? 0 : totalBonesValue}
        </Heading>
      </Box>
      {/* outputs */}
      <Flex
        w="100%"
        h="100%"
        maxH="400px"
        overflowY="auto"
        flexWrap="wrap"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        flexDir="row"
        align="start"
        justify="start"
        padding={2}
        overflow-y="scroll"
      >
        {bones.map((value, index) => {
          return (
            <Button
              width="96px"
              height="96px"
              key={index}
              bg={colorMode === "light" ? "gray.200" : "gray.700"}
              padding={1}
              position="relative"
              value={value}
              cursor="pointer"
              onClick={() => handleRemoveBone(index)}
              m="5px"
            >
              {/* {console.log(bones[index])} */}
              {bones[index][1]}
            </Button>
          );
        })}
      </Flex>

      {/* inputs */}
      <Flex align="start" justify="center" mt={5}>
        {/* count */}
        <Flex flexDir="column" alignItems="center" justify="center" mr={6}>
          <Heading mb={2}>Curious</Heading>
          <Button my={2} onClick={() => handleClearBones()}>
            Clear Bones
          </Button>

          <Checkbox
            my={2}
            isChecked={shouldCoinAddToTotal}
            onChange={() => setShouldCoinAddToTotal(!shouldCoinAddToTotal)}
            fontFamily={"heading"}
            fontWeight="bold"
            colorScheme="gray"
          >
            Coin Adds Total
          </Checkbox>
        </Flex>

        {/* common */}
        <Flex flexDir="column" alignItems="center" justify="center" mx={6}>
          <Heading mb={2}>Common</Heading>
          <Grid
            templateColumns="1fr 1fr 1fr 1fr"
            templateRows="1fr 1fr"
            gridGap="5px"
          >
            <Button onClick={() => handleAddBone(2)}>coin</Button>
            <Button onClick={() => handleAddBone(4)}>d4</Button>
            <Button onClick={() => handleAddBone(6)}>d6</Button>
            <Button onClick={() => handleAddBone(8)}>d8</Button>
            <Button onClick={() => handleAddBone(10)}>d10</Button>
            <Button onClick={() => handleAddBone(12)}>d12</Button>
            <Button
              bg={colorMode === "light" ? "gray.300" : "gray.600"}
              onClick={() => handleAddBone(20)}
            >
              d20
            </Button>
            <Button onClick={() => handleAddBone(100, true)}>d%</Button>
          </Grid>
        </Flex>

        {/* custom inputs */}
        <Flex flexDir="column" align="center" justify="center" ml={6}>
          <Heading mb={2}>Custom</Heading>
          <Flex flexWrap="nowrap" justify="flex-start" align="center">
            <NumberInput
              variant="filled"
              defaultValue={100}
              min={2}
              max={1000}
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
