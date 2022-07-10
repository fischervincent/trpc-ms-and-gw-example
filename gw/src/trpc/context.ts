import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}) // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

