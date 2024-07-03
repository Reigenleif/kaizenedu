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
import { useRouter } from "next/router";

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

interface ServicesCardProps {
  title: string;
  description: string;
  imgSrc: string;
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

const services: ServicesCardProps[] = [
  {
    title: "VIDEO",
    description:
      "Video pembelajaran yang mencakup baik materi maupun pembahasan soal",
    imgSrc: "/home/services/video.webp",
  },
  {
    title: "LIVE STREAMING",
    description:
      "Sesi pembahasan soal secara live streaming terutama mendekati ujian",
    imgSrc: "/home/services/live-streaming.webp",
  },
  {
    title: "COMMUNITY",
    description:
      "Forum  bagi para member untuk berdiskusi terkait soal dan mata kuliah",
    imgSrc: "/home/services/community.webp",
  },
  {
    title: "FILE MATERI",
    description:
      "Kumpulan file materi dan pembahasan ujian dari tahun-tahun sebelumnya",
    imgSrc: "/home/services/file-materi.webp",
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
        w={["100%", "29em"]}
        h="29em"
        pos="absolute"
        zIndex="-2"
        left={["", "calc(50% - 14.5em)"]}
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
  const { push } = useRouter();

  return (
    <>
      <PublicLayout>
        <Flex flexDir="column" px={["1em", "4em"]}>
          <Img src="/main-icon.webp" width="0px" height="0px"/>
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
                <Flex mt="1em" px="3em" gap="1em" flexDir={["column", "row"]}>
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
                    onClick={() => {
                      push("/playlists");
                    }}
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

          {/* TESTIMONIAL SECTION */}
          <Slide from="right" duration={0.5}>
            <Flex
              justifyContent="center"
              flexWrap="wrap"
              flexDir={["row", "row-reverse"]}
              gap="3em"
              alignItems="flex-end"
            >
              <Flex flexDir="column" w="min(30em, 90%)" gap="1.2em">
                <Text color="blue.100">Testimonials</Text>
                <Text fontWeight="bold" fontSize="3xl">
                  What Our Members Say About Us
                </Text>
                <Text>
                  “Sebelum langganan Kaizen Education, aku sering bingung harus
                  cari bahan belajar untuk beberapa mata kuliah. Sekarang, aku
                  jadi bisa belajar secara efektif dan efisien berkat
                  video-video dan fitur-fitur Kaizen yang bermanfaat banget!”
                </Text>
                <Flex justifyContent="space-between">
                  <Flex>
                    <Img
                      src="/home/comment/nando.webp"
                      objectFit="cover"
                      w="55px"
                      h="50px"
                      borderRadius="50%"
                      border="3px solid white"
                    />
                    <Img
                      src="/home/comment/mike.webp"
                      objectFit="cover"
                      w="50px"
                      h="50px"
                      borderRadius="50%"
                      border="3px solid white"
                      ml="-25px"
                    />
                    <Img
                      src="/home/comment/jems.webp"
                      objectFit="cover"
                      w="50px"
                      h="50px"
                      borderRadius="50%"
                      border="3px solid white"
                      ml="-25px"
                    />
                  </Flex>
                  <Flex flexDir="column" w="70%" gap="0.5em">
                    <Text fontWeight="bold" textAlign="left" w="100%">
                      Members Feedback
                    </Text>
                    <Flex gap="1.5em">
                      <AiFillStar size="1.5em" color="yellow" />
                      <Text>4.9</Text>
                      <Text opacity="80%">(76 Reviews)</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

              <Flex h="35em" position="relative" w="min(30em,90%)">
                <Box
                  bg="blue.100"
                  w="100%"
                  h="10em"
                  borderRadius="60px 60px 30px 30px"
                  pos="absolute"
                  top="25em"
                  zIndex="-1"
                />
                <Img src="/home/dhiaz-big.webp" w="100%" ml="3em" />
              </Flex>
            </Flex>
          </Slide>

          {/* SERVICES SECTION */}
          <FadeIn>
            <Flex flexDir={["column", "row"]} w="min(95em,100%)" mt="12em">
              <Flex flexDir="column" w={["100%", "50%"]} gap="0.5em">
                <Text color="blue.100">Our Story & Services</Text>
                <Text fontWeight="bold" fontSize="3xl">
                  Our Education Journey And Services
                </Text>
                <Text>
                  Menjadi mahasiswa yang seringkali resah akan keterbatasan
                  sumber belajar bersamaan dengan tuntutan capaian profil yang
                  tinggi, khususnya ketika berada pada jurusan, mendorong kami
                  untuk mendirikan Kaizen.edu yang merupakan platform
                  pembelajaran berbasis web sehingga mahasiswa mampu mengakses
                  materi kuliah secara fleksibel, mengurangi tekanan belajar
                  yang berlebihan dengan fitur yang beragam sehingga
                  mengakomodir berbagai gaya belajar yang berbeda di antara
                  mahasiswa dan mampu menarik minat mahasiswa, menyokong
                  partisipasi dan komitmen mahasiswa dalam pembelajaran.
                </Text>
                <Button
                  color="white"
                  bg="blue.100"
                  _hover={{ boxShadow: "" }}
                  w={["100%", "10em"]}
                >
                  Join Now
                </Button>
              </Flex>
              <Flex
                flexWrap="wrap"
                w={["100%", "50%"]}
                gap="1em"
                py="2em"
                justifyContent="center"
              >
                {services.map((service, index) => (
                  <ServicesCard
                    title={service.title}
                    description={service.description}
                    imgSrc={service.imgSrc}
                    key={index}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex></Flex>
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
      w={["95%", "15em"]}
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
        <Flex flexDir="column" gap="0.5em" w={["60%", "auto"]} mt="1em">
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

const ServicesCard = ({ title, description, imgSrc }: ServicesCardProps) => {
  return (
    <Flex
      borderRadius="30px"
      background="#FFF"
      boxShadow="7px 12px 43px 0px rgba(0, 0, 0, 0.14)"
      p="1em"
      flexDir="column"
      alignItems="center"
      w="min(17em,100%)"
      h="17em"
      transition="transform 0.3s ease-in-out"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Img src={imgSrc} w="5em" h="5em" color="blue.100" />
      <Text fontWeight="bold" fontSize="1.5em" mt="1em">
        {title}
      </Text>
      <Text textAlign="center" mt="1em" color="blue.100" fontSize="sm">
        {description}
      </Text>
    </Flex>
  );
};
