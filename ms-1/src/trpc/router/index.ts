import superjson from "superjson";
import { createRouter } from "./createRouter";
import { something } from "./something";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("something.", something) // if we put a prefix it's not working :/

export type AppRouter = typeof appRouter;
