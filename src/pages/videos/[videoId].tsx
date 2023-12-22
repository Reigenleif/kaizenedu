import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineThumbUp, MdThumbUp } from "react-icons/md";
import { Loading } from "~/components/common/Loading";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { api } from "~/utils/api";
import { suffixCounterAdder } from "~/utils/functions/text-renders";

export default function VideoPage() {
  const { query, push } = useRouter();

  const videoId = query.videoId as string;

  const [videoSource, setVideoSource] = useState("");

  const { data: video } = api.video.visitor.getVideoById.useQuery({
    videoId,
  });

  useEffect(() => {
    if (video) {
      if (video.isPublic) {
        setVideoSource(video.url);
      } else {
        // TODO : ADD SIGNEDURL AUTH
      }
    }
  }, [video]);

  return (
    <PublicLayout>
      {video ? (
        <Flex flexDir="column" gap="3em">
          <Flex w="100%" justifyContent="center">
            <iframe src={videoSource} width="560" height="315" title="Video" />
          </Flex>
          <Flex flexDir="column" w="min(90em,95%)" mx="auto">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="xl">{video?.title}</Text>
              {video.likesCount > 0 && (
                <Text>{suffixCounterAdder(video.likesCount)}</Text>
              )}
              <Button
                bg="gray.100"
                _hover={{}}
                _active={{}}
                color="black"
                py="0.1em"
                border="none"
              >
                <MdOutlineThumbUp size="1em" />
              </Button>
            </Flex>
            <Flex
              w="100%"
              background="gray.100"
              flexDir="column"
              p="1em"
              gap="1em"
              borderRadius="10px"
            >
              <Flex gap="3em">
                <Text>{`${suffixCounterAdder(video.viewsCount)} views`}</Text>
              </Flex>
              <Text fontSize="sm" opacity="0.8">
                {video.description}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Loading />
      )}
    </PublicLayout>
  );
}
