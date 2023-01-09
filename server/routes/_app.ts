import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
 

  fetchsome: procedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(async ({ input }) => {
      const response = await fetch(
        `https://api.github.com/users/${input.username}`
      );
      const data = await response.json();
      return {
        followers: `${data.followers}`,
        username:`${data.login}`
      };
    }),
});

export type AppRouter = typeof appRouter;
