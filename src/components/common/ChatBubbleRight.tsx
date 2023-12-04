import { Box, Flex, FlexProps } from "@chakra-ui/react";

interface ChatBubbleProps extends FlexProps {
  children: React.ReactNode;
}

export const ChatBubbleRight = (props: ChatBubbleProps) => {
  const { children, ...rest } = props;
  return (
    <Flex
      wMax="80%"
      w="20em"
      {...rest}
      flexDir="column"
      overflowY="hidden"
      pr="30px"
    >
      <Flex
        pos="relative"
        flexDir="column"
        alignItems="flex-end"
        w="100%"
        borderRadius="12"
        bg="white"
        color="blue.100"
        p="4"
      >
        <Box
          pos="absolute"
          bottom="0"
          zIndex="-2"
          flexDir="column"
          alignItems="flex-end"
          w="calc(100% - 30px)"
          borderRadius="12"
          bg="white"
          color="blue"
          p="4"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        />
        {children}
      </Flex>

      <Box
        zIndex="-1"
        pos="relative"
        top="-50px"
        left="calc(100% - 65px)"
        w="60px"
        h="60px"
        borderTop="30px solid transparent"
        borderBottom="30px solid transparent"
        borderRight="30px solid white"
        transform="skew(20deg)"
      />
    </Flex>
  );
};
