import { Box, Image, Text } from "@chakra-ui/react";

import coinHeads from "../assets/bone_coin_heads.png";
import coinTails from "../assets/bone_coin_tails.png";
import d10 from "../assets/bone_d10.png";
import d12 from "../assets/bone_d12.png";
import d20 from "../assets/bone_d20.png";
import d4 from "../assets/bone_d4.png";
import d6 from "../assets/bone_d6.png";
import d8 from "../assets/bone_d8.png";
import dx from "../assets/bone_dx.png";

export const GetBoneElement = (faceCount, value) => {
  switch (faceCount) {
    case 2:
      return GetCoinBoneElement(value);
    case 4:
      return GetD4BoneElement(value);
    case 6:
      return GetD6BoneElement(value);
    case 8:
      return GetD8BoneElement(value);
    case 10:
      return GetD10BoneElement(value);
    case 12:
      return GetD12BoneElement(value);
    case 20:
      return GetD20BoneElement(value);
    default:
      return GetDXBoneElement(value);
  }
};

export const GetCoinBoneElement = (value) => {
  switch (value) {
    case 1:
      return BoneElement(0, coinTails);
    case 2:
      return BoneElement(0, coinHeads);
    default:
      break;
  }
};

export const GetD4BoneElement = (value) => {
  return BoneElement(value, d4);
};

export const GetD6BoneElement = (value) => {
  return BoneElement(value, d6);
};

export const GetD8BoneElement = (value) => {
  return BoneElement(value, d8);
};

export const GetD10BoneElement = (value) => {
  return BoneElement(value, d10);
};

export const GetD12BoneElement = (value) => {
  return BoneElement(value, d12);
};

export const GetD20BoneElement = (value) => {
  return BoneElement(value, d20);
};

export const GetDXBoneElement = (value) => {
  return BoneElement(value, dx);
};

export const BoneElement = (value, graphic) => {
  return (
    <Box w="100%" h="100%">
      <Image src={graphic} w="100%" />
      <Text
        pos="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        color="gray.800"
        fontSize="xl"
        fontFamily="heading"
      >
        {value === 0 ? "" : value}
      </Text>
    </Box>
  );
};
