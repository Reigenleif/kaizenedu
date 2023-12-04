import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdSearch,
  MdReorder,
} from "react-icons/md";
import { FadeIn } from "~/utils/animation/entrance-animation";
import { useHoverMenu } from "~/utils/hooks/useHoverMenu";
import { useIsMobile } from "~/utils/hooks/useIsMobile";

interface NavbarProps {
  type?: "signin" | "signup";
}

export const Navbar = ({ type }: NavbarProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  const isMobile = useIsMobile();

  return (
    <Flex
      justifyContent="space-between"
      px="2em"
      py="0.5em"
      alignItems="center"
      mb="1em"
    >
      <Img
        src="main-icon.webp"
        alt="main icon"
        h="3em"
        ml="2em"
        onClick={() => router.push("/")}
        cursor="pointer"
      />
      {isMobile ? (
        <ButtonGroupMobile session={session ?? undefined} />
      ) : (
        <ButtonGroupDesktop session={session ?? undefined} />
      )}
    </Flex>
  );
};

const ButtonGroupDesktop = ({ session }: { session?: Session }) => {
  const productDisclosure = useDisclosure();
  const membershipDisclosure = useDisclosure();

  const productToggle = () => {
    productDisclosure.onToggle();
    membershipDisclosure.onClose();
  };

  const membershipToggle = () => {
    membershipDisclosure.onToggle();
    productDisclosure.onClose();
  };

  return (
    <>
      <FadeIn>
        <Flex>
          <Button variant="ghost-blue">Home</Button>
          <Menu isOpen={productDisclosure.isOpen}>
            <MenuButton as={Button} variant="ghost" onClick={productToggle}>
              Products{" "}
              <Text fontSize="0.5em" w={"1em"} display="inline">
                {productDisclosure.isOpen ? "▲" : "▼"}
              </Text>
            </MenuButton>
            <MenuList as={Flex} flexDir="column" gap="1em" p="1em">
              <Button onClick={() => console.log("clicked")}>Product 1</Button>
              <Button onClick={() => console.log("clicked")}>Product 2</Button>
              <Button onClick={() => console.log("clicked")}>Product 3</Button>
            </MenuList>
          </Menu>
          <Menu isOpen={membershipDisclosure.isOpen}>
            <MenuButton
              as={Button}
              variant="ghost"
              onClick={membershipToggle}
              alignItems="center"
            >
              Membership{" "}
              <Text fontSize="0.5em" w={"1em"} display="inline">
                {membershipDisclosure.isOpen ? "▲" : "▼"}
              </Text>
            </MenuButton>
            <MenuList as={Flex} flexDir="column" gap="1em" p="1em">
              <Button onClick={() => console.log("clicked")}>
                Membership 1
              </Button>
              <Button onClick={() => console.log("clicked")}>
                Membership 2
              </Button>
              <Button onClick={() => console.log("clicked")}>
                Membership 3
              </Button>
            </MenuList>
          </Menu>
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Carrier</Button>
        </Flex>
      </FadeIn>
      <FadeIn>
        <Flex alignItems="center" gap="1em">
          <Button variant="ghost">
            <MdSearch size="2em" />
          </Button>
          <Button variant="fill">Contact Us</Button>
          {session ? (
            <Text>Hello, {session.user.name?.split(" ")[0]} </Text>
          ) : (
            <Button variant="outline">Sign In</Button>
          )}
        </Flex>
      </FadeIn>
    </>
  );
};

const ButtonGroupMobile = ({ session }: { session?: Session }) => {
  const productDisclosure = useDisclosure();
  const membershipDisclosure = useDisclosure();
  const groupDisclosure = useDisclosure();

  const productToggle = () => {
    productDisclosure.onToggle();
    membershipDisclosure.onClose();
  };

  const membershipToggle = () => {
    membershipDisclosure.onToggle();
    productDisclosure.onClose();
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          onClick={groupDisclosure.onOpen}
        >
          <MdReorder size="2.5em" />
        </MenuButton>
        <MenuList
          as={Flex}
          w="100vw"
          gap="1em"
          flexDir="column"
          px="4em"
          pb="2em"
        >
          <Accordion w="100%" allowToggle>
            <AccordionItem w="100%">
              <AccordionButton textAlign="center" w="100%">
                <Text w="100%" textAlign="center">
                  Products ▼
                </Text>
              </AccordionButton>
              <AccordionPanel w="100%">
                <Flex flexDir="column">
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Product 1
                  </Button>
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Product 2
                  </Button>
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Product 3
                  </Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="100%">
              <AccordionButton textAlign="center" w="100%">
                <Text w="100%" textAlign="center">
                  Membership ▼
                </Text>
              </AccordionButton>
              <AccordionPanel w="100%">
                <Flex flexDir="column">
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Membership 1
                  </Button>
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Membership 2
                  </Button>
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Membership 3
                  </Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Carrier</Button>
          <Button variant="fill">Contact Us</Button>
          {session ? (
            <Text>Hello, {session.user.name?.split(" ")[0]} </Text>
          ) : (
            <Button variant="outline">Sign In</Button>
          )}
        </MenuList>
      </Menu>
    </>
  );
};
