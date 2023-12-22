import {
  Avatar,
  Button,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";

export const SignInBtn = () => {
  const toast = useToast();

  const { data: session } = useSession();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const signOutDisclosure = useDisclosure();

  const googleSignIn = () => {
    signIn();
  };

  const onSignOut = () => {
    toast({
      title: "Signed Out",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    signOut();
  };

  return (
    <>
      {!session?.user ? (
        <Button onClick={onOpen} variant="outline" w={["100%", "8em"]}>
          Sign In
        </Button>
      ) : (
        <Menu>
          <MenuButton>
            {session?.user.image ? (
              <Img
                src={session?.user.image}
                height="2em"
                w="2em"
                borderRadius="1em"
              />
            ) : (
              <Avatar h="2em" w="2em" />
            )}
          </MenuButton>
          <MenuList>
            <Button onClick={googleSignIn} variant="outline">
              Sign In
            </Button>
          </MenuList>
        </Menu>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Sign In</ModalHeader>
          <ModalBody as={Flex} justifyContent="center">
            <Button m="auto" mt="1em" w="50%" onClick={googleSignIn}>
              Sign In with Google
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};


