import { Box, Flex, Text } from "@chakra-ui/react";
import { FadeIn, Slide } from "~/utils/animation/entrance-animation";

export const ComingSoon = () => {
  return (
    <Flex w="100%" flexDir="column">
      <Box h="2em">
        <FadeIn>
          <Text fontSize="4xl" color="blue.100" textAlign="center" w="100vw">
            Something Special is Coming!
          </Text>
        </FadeIn>
      </Box>
      <Box w="100vw" h="100vh" pos="relative">
        <Slide from="bottom">
          <Box
            bg="linear-gradient(180deg, #043E7D -29.29%, rgba(4, 62, 125, 0.56) 6.12%, rgba(217, 217, 217, 0.00) 70.71%)"
            w="100vw"
            h="100vh"
            transform="rotate(180deg)"
          />
        </Slide>
      </Box>
    </Flex>
  );
};
