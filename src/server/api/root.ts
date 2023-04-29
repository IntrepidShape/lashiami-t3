import { createTRPCRouter } from "lashiami-t3/server/api/trpc";
import { exampleRouter } from "lashiami-t3/server/api/routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
