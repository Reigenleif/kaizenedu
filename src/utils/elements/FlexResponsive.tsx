import { Flex, FlexProps } from "@chakra-ui/react";

export const FlexResponsive = (props: FlexProps) => {
  const { children, ...rest } = props;

  return (
    <Flex flexDir={["column",  "row"]} {...rest}>
      {children}
    </Flex>
  );
};
