import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { storageRouter } from "./routers/storage";
import { profileRouter } from "./routers/profile";
import { visitorPlaylistRouter } from "./routers/playlist/visitor";
import { visitorVideoRouter } from "./routers/video/visitor";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  storage: storageRouter,
  profile: profileRouter,
  playlist: createTRPCRouter({
    visitor: visitorPlaylistRouter,
  }),
  video: createTRPCRouter({
    visitor: visitorVideoRouter,
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
