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
import { SignInBtn } from "~/components/SignInBtn";
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
        src="/main-icon.webp"
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
  const { push } = useRouter();

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
            <MenuList
              as={Flex}
              flexDir="column"
              gap="1em"
              p="1em"
              border="1px solid rgba(0,0,0,0.1)"
            >
              <Button onClick={() => push("/playlists")} variant="ghost">
                Video
              </Button>
              <Button onClick={() => console.log("clicked")} variant="ghost">
                Kuis
              </Button>
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
            <MenuList
              as={Flex}
              flexDir="column"
              p="1em"
              border="1px solid rgba(0,0,0,0.1)"
            >
              <Button onClick={() => push("membership")} variant="ghost">
                Kai
              </Button>
              <Button onClick={() => push("membership")} variant="ghost">
                Zen
              </Button>
              <Button onClick={() => push("membership")} variant="ghost">
                Edu
              </Button>
            </MenuList>
          </Menu>
          <Button variant="ghost" onClick={() => push("/community")}>
            Community
          </Button>
          <Button variant="ghost" onClick={() => push("/carreer")}>
            Carreer
          </Button>
        </Flex>
      </FadeIn>
      <FadeIn>
        <Flex alignItems="center" gap="1em">
          <Button variant="ghost">
            <MdSearch size="2em" />
          </Button>
          <Button variant="fill">Contact Us</Button>
          <SignInBtn />
        </Flex>
      </FadeIn>
    </>
  );
};

const ButtonGroupMobile = ({ session }: { session?: Session }) => {
  const productDisclosure = useDisclosure();
  const membershipDisclosure = useDisclosure();
  const groupDisclosure = useDisclosure();

  const { push } = useRouter();

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
                  <Button onClick={() => push("/playlists")} variant="ghost">
                    Video
                  </Button>
                  <Button
                    onClick={() => console.log("clicked")}
                    variant="ghost"
                  >
                    Kuis
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
                  <Button onClick={() => push("membership")} variant="ghost">
                    Kai
                  </Button>
                  <Button onClick={() => push("membership")} variant="ghost">
                    Zen
                  </Button>
                  <Button onClick={() => push("membership")} variant="ghost">
                    Edu
                  </Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Carrier</Button>
          <Button variant="fill">Contact Us</Button>

          <SignInBtn />
        </MenuList>
      </Menu>
    </>
  );
};
