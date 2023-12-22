import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ExpandingCard } from "~/components/common/ExpandingCard";
import { Loading } from "~/components/common/Loading";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { api } from "~/utils/api";

export default function PlaylistPage() {
  const router = useRouter();

  const { data: playlistList, isLoading: playlistIsLoading } =
    api.playlist.visitor.getAllPlaylist.useQuery();

  return (
    <PublicLayout>
      <Flex flexDir="column" gap="3rem" mt="1rem">
        <Text w="100%" fontWeight="bold" fontSize="3xl" textAlign="center" color="blue.100">
          Video Playlist
        </Text>
        {playlistIsLoading ? (
          <Loading />
        ) : (
          <Flex flexDir="column" gap="1em" px={["10%", "4em"]} alignItems="center">
            {playlistList?.map((playlist, index) => (
              <ExpandingCard
                key={index}
                onClick={() => router.push(`/playlists/${playlist.id}`)}
              >
                {/* bisa masukkin gambar playlist */}
                <Flex flexDir="column" gap="0.5em">
                  <Text fontSize="lg" fontWeight="bold" color="blue.100">{playlist.name}</Text>
                  <Text fontSize="sm" opacity="0.9">{playlist.description}</Text>
                </Flex>
              </ExpandingCard>
            )) ?? <Text> No Playlists Available</Text>}
          </Flex>
        )}
      </Flex>
    </PublicLayout>
  );
}
