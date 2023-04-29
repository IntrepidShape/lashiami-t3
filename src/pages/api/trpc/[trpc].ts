import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "lashiami-t3/env.mjs";
import { createTRPCContext } from "lashiami-t3/server/api/trpc";
import { appRouter } from "lashiami-t3/server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
