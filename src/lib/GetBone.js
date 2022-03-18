import { Image } from "@chakra-ui/react";

export const HandleGetBone = (value) => {
  switch (value) {
    case 2:
      return GetCoinBoneImage();
    case 4:
      return GetD4BoneImage();
    case 6:
      return GetD6BoneImage();
    case 8:
      return GetD8BoneImage();
    case 10:
      return GetD10BoneImage();
    case 12:
      return GetD12BoneImage();
    case 20:
      return GetD20BoneImage();
    default:
      return GetDXBoneImage(value);
  }
};

export const GetCoinBoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD4BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD6BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD8BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD10BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD12BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetD20BoneImage = () => {
  return <Image src={} w="100%" />;
};

export const GetDXBoneImage = (value) => {
  return <Image src={} w="100%" />;
};

// export const BoneElement = (value) => {
//   return (
//     <Button
//       width="96px"
//       height="96px"
//       key={index}
//       bg={colorMode === "light" ? "gray.200" : "gray.700"}
//       padding={1}
//       position="relative"
//       value={value}
//       cursor="pointer"
//       onClick={() => handleRemoveBone(index)}
//       m="5px"
//     >
//       <Flex w="100%" h="100%" align="center" justify="center">
//         {value === 20 && <Image src={boneDi} w="100%" />}
//         {value % 3 === 0 && value !== 20 && <Image src={boneTri} w="100%" />}
//         {value % 3 !== 0 && value !== 20 && <Image src={bone} w="100%" />}
//         <Text
//           pos="absolute"
//           left="50%"
//           top="50%"
//           transform="translate(-50%, -50%)"
//           color="gray.800"
//         >
//           {value}
//         </Text>
//       </Flex>
//     </Button>
//   );
// };