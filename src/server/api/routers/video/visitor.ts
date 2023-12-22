import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

export const visitorVideoRouter = createTRPCRouter({
  getVideoListByPlaylistId: publicProcedure
    .input(
      z.object({
        playlistId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { playlistId } = input;

      const videoList = await ctx.prisma.video.findMany({
        where: {
          playlistId,
        },
      });

      return videoList;
    }),

  getVideoById: publicProcedure
    .input(
      z.object({
        videoId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { videoId } = input;

      const video = await ctx.prisma.video.findUnique({
        where: {
          id: videoId,
        },
        include: {
          playlist: {
            include: {
              videos: {
                select: {
                  id: true,
                  title: true,
                  description: true,
                  thumbnail: true,
                },
              },
            },
          },
        },
      });

      if (!video) return null;

      const updatedVideo = await ctx.prisma.video.update({
        where: {
          id: video.id,
        },
        data: {
          viewsCount: video.viewsCount + 1,
        },
      });

      return video;
    }),
});
