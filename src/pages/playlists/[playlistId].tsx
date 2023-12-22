import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdArrowBack, MdArrowLeft, MdOutlineArrowLeft } from "react-icons/md";
import { ExpandingCard } from "~/components/common/ExpandingCard";
import { Loading } from "~/components/common/Loading";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { api } from "~/utils/api";

export default function PlaylistPage() {
  const { query, push } = useRouter();

  const playlistId = query.playlistId as string;
  const { data: playlist, isLoading: playlistIsLoading } =
    api.playlist.visitor.getPlaylistById.useQuery({
      playlistId,
    });

  return (
    <PublicLayout>
      <Flex flexDir="column" gap="3rem" mt="1rem">
        <Box onClick={() => push(`/playlists`)} pos="absolute" ml="2em" cursor="pointer">
            <MdOutlineArrowLeft size="3em" color="blue.100" />
        </Box>
        <Text
          w="100%"
          fontWeight="bold"
          fontSize="3xl"
          textAlign="center"
          color="blue.100"
        >
          {playlist?.name ?? ""}
        </Text>
        {playlistIsLoading ? (
          <Loading />
        ) : (
          <Flex flexDir="column" gap="1em" px={["10%", "4em"]}>
            {playlist?.videos.map((video, index) => (
              <ExpandingCard
                key={index}
                onClick={() => push(`/videos/${video.id}`)}
              >
                {/* bisa masukkin gambar video */}
                <Flex flexDir="column" gap="0.5em">
                  <Text fontSize="lg" fontWeight="bold" color="blue.100">
                    {video.title}
                  </Text>
                  <Text fontSize="sm" opacity="0.9">
                    {video.description}
                  </Text>
                </Flex>
              </ExpandingCard>
            )) ?? <Text> No Playlists Available</Text>}
          </Flex>
        )}
      </Flex>
    </PublicLayout>
  );
}
