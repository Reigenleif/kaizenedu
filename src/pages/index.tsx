import { Box, Button, Flex, Img, Text, useDisclosure } from "@chakra-ui/react";
import styles from "./index.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { withSession } from "~/server/auth/withSession";
import { api } from "~/utils/api";
import { FlexResponsive } from "~/utils/elements/FlexResponsive";
import { ChatBubbleRight } from "~/components/common/ChatBubbleRight";
import {
  FadeIn,
  Slide,
  StaggeredSlide,
} from "~/utils/animation/entrance-animation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface FavouritePlaylistCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

interface FavouriteVideoCardProps {
  title: string;
  description: string;
  imgSrc: string;
  rating: number;
  favourited: boolean;
}

const FAVOURITE_VIDEOS: FavouriteVideoCardProps[] = [
  {
    title: "Persiapan UAS Ekonomi Teknik",
    description: "Pembahasan UAS Ekonomi Teknik 2021/2022",
    imgSrc: "/home/favvid/ektek.webp",
    rating: 4.9,
    favourited: true,
  },
  {
    title: "Persiapan UAS Fisika Dasar IA",
    description: "Pembahasan UAS Fisika Dasar IA 2021/2022",
    imgSrc: "/home/favvid/fisdas.webp",
    rating: 4.6,
    favourited: false,
  },
  {
    title: "Persiapan UAS Mekanika Fluida",
    description: "Pembahasan UAS Mekanika Fluida 2021/2022",
    imgSrc: "/home/favvid/mekflu.webp",
    rating: 4.5,
    favourited: true,
  },
];

const FAVOURITE_PLAYLISTS: FavouritePlaylistCardProps[] = [
  {
    title: "Ekonomi Teknik",
    description: "(15 Videos)",
    imgSrc: "/home/favpl/ektek.webp",
  },
  {
    title: "Mekanika Fluida",
    description: "(15 Videos)",
    imgSrc: "/home/favpl/mekflu.webp",
  },
  {
    title: "Matriks dan Ruang Vektor",
    description: "(15 Videos)",
    imgSrc: "/home/favpl/mavek.webp",
  },
  {
    title: "Termodinamika",
    description: "(15 Videos)",
    imgSrc: "/home/favpl/termo.webp",
  },
];

const ZahraBig = () => {
  return (
    <Flex h="40em" pos="relative" w="100%" mt={["10em", "0"]}>
      <Flex pos="absolute" top="4em" left="0">
        <ChatBubbleRight>
          <Text>Let's get Better Everyday!</Text>
        </ChatBubbleRight>
      </Flex>
      <Box
        w="25em"
        h="25em"
        pos="absolute"
        zIndex="-3"
        borderRadius="12.5em"
        bg="blue.100"
        left="calc(50% - 12.5em)"
        top="2em"
      />
      <Img
        src="/zahra.png"
        w="29em"
        h="29em"
        pos="absolute"
        zIndex="-2"
        left="calc(50% - 14.5em)"
        top="0"
      />
      <Flex pos="absolute" bottom="0" w="100%">
        <Flex
          w={["100%", "60%"]}
          bg="white"
          mx="auto"
          borderRadius="40"
          boxShadow="7px 35px 51px 0px rgba(0, 0, 0, 0.14)"
          p="1em"
          pos="relative"
          top="-2em"
          gap="1em"
        >
          <Flex bg="gray" borderRadius="20px" w="10em"></Flex>
          <Flex flexDir="column">
            <Text color="blue.100">Trending Now</Text>
            <Text fontSize="1.5em" fontWeight="bold">
              Persiapan UAS Mekanika Kuantum
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <PublicLayout>
        <Flex flexDir="column" px="4em">
          {/* FRONT SECTION */}
          <Slide from="left" duration={0.5}>
            <FlexResponsive pb="3em">
              <Flex w={["100%", "50%"]} flexDir="column" gap="1em">
                <Text fontSize="3em" fontWeight="bold" w="100%" mt="3em">
                  Selamat datang di
                </Text>
                <Text
                  fontSize="3em"
                  fontWeight="bold"
                  color="blue.100"
                  w="100%"
                >
                  Kaizen Education!
                </Text>
                <Text fontSize="1em" fontWeight="light">
                  Membantu mahasiswa untuk terus berkembang menjadi lebih baik!
                </Text>
                <Text fontSize="1em" color="blue.100">
                  #ContinuousBetterment #ImproveEveryday
                </Text>
                <Flex mt="1em" px="3em" gap="1em">
                  <Button
                    variant="fill"
                    fontSize="2xl"
                    px="2em"
                    py="1em"
                    fontWeight="300"
                  >
                    Join Now
                  </Button>
                  <Button
                    variant="outline"
                    fontSize="2xl"
                    px="2em"
                    py="1em"
                    fontWeight="300"
                  >
                    Watch Video
                  </Button>
                </Flex>
              </Flex>
              <Flex justifyContent="center" w="min(100%, 50em)">
                <ZahraBig />
              </Flex>
            </FlexResponsive>
          </Slide>

          {/* FAVOURITE PLAYLIST SECTION */}
          <FadeIn>
            <Text color="blue.100" w="100%" textAlign="center" mt="15em">
              MEMBER’S FAVOURITES
            </Text>
            <Text
              fontSize="2.5em"
              fontWeight="bold"
              w="100%"
              textAlign="center"
            >
              Popular Playlists
            </Text>
            <FlexResponsive justifyContent="center" gap="2em" mt="2em">
              <StaggeredSlide from="right" duration={0.3} delay={0.2}>
                {FAVOURITE_PLAYLISTS.map((playlist, index) => (
                  <FavouritePlaylistCard
                    title={playlist.title}
                    description={playlist.description}
                    imgSrc={playlist.imgSrc}
                    key={index}
                  />
                ))}
              </StaggeredSlide>
            </FlexResponsive>
          </FadeIn>

          {/* FAVOURITE VIDEO SECTION */}
          <FadeIn>
            <Text textAlign="left" color="blue.100" w="100%" mt="15em">
              VIDEO PEMBELAJARAN
            </Text>
            <Text fontSize="2.5em" fontWeight="bold" w="100%" textAlign="left">
              Video Favorit Bulan Ini
            </Text>
            <FlexResponsive justifyContent="center">
              <StaggeredSlide from="left" duration={0.3} delay={0.2}>
                {FAVOURITE_VIDEOS.map((video, index) => (
                  <FavouriteVideoCard
                    title={video.title}
                    description={video.description}
                    imgSrc={video.imgSrc}
                    rating={video.rating}
                    favourited={video.favourited}
                    key={index}
                  />
                ))}
              </StaggeredSlide>
            </FlexResponsive>
          </FadeIn>
        </Flex>
      </PublicLayout>
    </>
  );
}

const FavouritePlaylistCard = ({
  title,
  description,
  imgSrc,
}: FavouritePlaylistCardProps) => {
  const { isOpen: favourited, onToggle: toggleFavourite } = useDisclosure();

  return (
    <Flex
      w={["70%", "15em"]}
      h="15em"
      flexDir={["row", "column"]}
      borderRadius="20"
      boxShadow="2px 10px 30px 0px rgba(0, 0, 0, 0.2)"
      bg="white"
      p="1em"
      gap="1em"
      justifyContent={["space-between", "center"]}
      alignItems={"center"}
      mx={["auto", "2em"]}
      my="3em"
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        cursor: "pointer",
      }}
    >
      <Flex
        w="8em"
        h="8em"
        borderRadius="4em"
        alignItems="center"
        justifyContent="center"
        mx={["0", "auto"]}
        bg="blue.400"
      >
        <Img src={imgSrc} w="5em" h="5em" />
      </Flex>
      <Flex flexDir="column" gap="0.5em" w={["60%", "auto"]}>
        <Text fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <Text opacity="70%" textAlign="center">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

const FavouriteVideoCard = ({
  title,
  description,
  imgSrc,
  rating,
  favourited: initFavourited,
}: FavouriteVideoCardProps) => {
  const { isOpen: favourited, onToggle: toggleFavourite } = useDisclosure({
    isOpen: initFavourited,
  });

  return (
    <Flex
      flexDir="column"
      w={["100%", "25em"]}
      maxH="25em"
      borderRadius="20"
      boxShadow="2px 9px 42px 0px rgba(0, 0, 0, 0.2)"
      bg="white"
      p="1em"
      pt="0"
      pb="2em"
      gap="1em"
      justifyContent={["space-between", "flex-start"]}
      alignItems={"center"}
      mx={["auto", "2em"]}
      my="3em"
      overflow="hidden"
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        cursor: "pointer",
      }}
    >
      <Flex flexDir="column" w="100%" alignItems="center">
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Flex gap="0.7em">
            <AiFillStar size="1.5em" color="yellow" />
            <Text fontSize="0.8em" fontWeight="bold">
              {rating}
            </Text>
          </Flex>
          <Button
            variant="fill"
            fontSize="0.8em"
            px="1em"
            py="0.5em"
            fontWeight="300"
            bg="blue.100"
            _hover={{}}
            onClick={() => {
              alert(favourited ? "unfavourited" : "favourited");
              toggleFavourite();
            }}
            borderRadius="0"
            borderBottomLeftRadius={"20"}
            borderTopRightRadius={"20"}
            border="none"
            pos={"relative"}
            left={"1.5em"}
            w="4em"
          >
            {favourited ? <AiFillStar /> : <AiOutlineStar />}
          </Button>
        </Flex>
        <Flex
          maxW="80%"
          h="8em"
          borderRadius="10px"
          alignItems="center"
          justifyContent="center"
          mx={["0", "auto"]}
          
        >
          <Img src={imgSrc} h="6em" />
        </Flex>
        <Flex flexDir="column" gap="0.5em" w={["60%", "auto"]}  mt="1em">
          <Text fontWeight="bold" textAlign="center" w="100%">
            {title}
          </Text>
          <Text opacity="70%" textAlign="center" w="100%">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
