import { Box, Flex, FlexProps } from "@chakra-ui/react";

export const ContentCard = (customProps: FlexProps) => {
  const initialProps = {
    boxShadow: "2px 9px 42px 0px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    bg: "white",
    p: "1em",
    w: "min(40em,90%)",
    mx: "auto",
    mb: "38px"
  };

  return (
      <Flex {...initialProps} {...customProps}>
        {customProps.children}
      </Flex>
  );
};
