import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

export const visitorPlaylistRouter = createTRPCRouter({
  getAllPlaylist: publicProcedure.query(async ({ ctx }) => {
    // TODO : ADD QUERYING
    const playlistList = await ctx.prisma.playlist.findMany();

    return playlistList;
  }),

  getPlaylistById: publicProcedure
    .input(
      z.object({
        playlistId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { playlistId } = input;

      const playlist = await ctx.prisma.playlist.findUnique({
        where: {
          id: playlistId,
        },

        include: {
          videos: {
            select: {
                id: true,
                title: true,
                description: true,
                thumbnail: true,
            }
          }
        },
      });

      return playlist;
    }),
});
