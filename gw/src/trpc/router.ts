import superjson from "superjson";
import { createRouter } from "./createRouter";
import { appRouter } from "ms-1";

export const gwRouter = createRouter()
  .transformer(superjson)
  .merge("ms1.", appRouter);

export type GwRouter = typeof gwRouter;
