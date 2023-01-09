import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        data: z.number(),
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.data}`,
        name: `this is my name : ${input.name}`,
      };
    }),
  hi: procedure.query(() => {
    return "hi";
  }),

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
      };
    }),
});

export type AppRouter = typeof appRouter;
