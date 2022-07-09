import * as trpc from '@trpc/server';
import { z } from 'zod';

// TRPC ROUTER
export const appRouter = trpc
  .router()
  .query('getSomethingById', {
    input: z.number(),
    async resolve(req) {
      // here we would call the ORM for example
      return { name: `Hi from ms-1, called with id: ${req.input}, with trpc` };
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;
