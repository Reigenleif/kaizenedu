import { Button, Flex, Icon, Image, Img, Text } from "@chakra-ui/react";
import { mdiInstagram } from "@mdi/js";
import { useRouter } from "next/router";
import { MdCamera, MdCameraFront, MdPhotoCamera } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuAtSign } from "react-icons/lu";
import { useIsMobile } from "~/utils/hooks/useIsMobile";

export const Footer = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <Flex
      bg="whte"
      w="100%"
      h="auto"
      justifyContent="space-around"
      fontFamily="heading"
      fontSize={{ base: "md", md: "xl" }}
      color="black"
      py="3em"
      px="2em"
      zIndex="10"
      mt="4em"
      flexDir={isMobile ? "column" : undefined}
    >
      <Flex flexDir="column" alignItems={["center", "flex-start"]}>
        <Img src="/main-icon.webp" h="3em" mt="2em" />
        <Text textAlign="justify" w="min(40%,50em)" mt="3em" fontWeight="light">
          An education platform founded to help students be better continuously.
        </Text>
      </Flex>
      <Flex h="100%" gap="4em" flexDir={["column", "row"]} mt="2em">
        
        <Flex
          flexDir="column"
          alignItems={["center", "flex-start"]}
          gap="1.5em"
        >
          <Text fontWeight="bold" mb="1em" pl="0.8em">
            Main Menu
          </Text>
          <LinkBtn text="Home" />
          <LinkBtn text="Products" />
          <LinkBtn text="Membership" />
          <LinkBtn text="Community" />
          <LinkBtn text="Careers" />
        </Flex>
        <Flex
          flexDir="column"
          alignItems={["center", "flex-start"]}
          gap="1.5em"
        >
          <Text fontWeight="bold" mb="1em" pl="0.8em">
            Contact Us
          </Text>
          <LinkBtn text="cs@kaizen.edu" />
          <LinkBtn text="+64 958 248 966" />
          <LinkBtn text="Social media" />
        </Flex>
      </Flex>
    </Flex>
  );
};

interface LinkBtnProps {
  icon?: string;
  text: string;
  onClick?: () => void;
}

const LinkBtn = ({ icon, text, onClick }: LinkBtnProps) => {
  return (
    <Button variant="ghost" onAbort={onClick}>
      {text}
    </Button>
  );
};
