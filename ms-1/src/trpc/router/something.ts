import * as trpc from '@trpc/server';
import { z } from 'zod';

export const something = trpc
  .router()
  .query('getById', {
    input: z.number(),
    async resolve(req) {
      // here we would call the ORM for example
      return { name: `Hi from ms-1, called with id: ${req.input}, with trpc` };
    },
  });

export type Something = typeof something;
