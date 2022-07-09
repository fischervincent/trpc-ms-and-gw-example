import express, { Express } from 'express';

import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from './trpc';


// EXPRESS
const app: Express = express();
const port = 5006;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);


app.listen(port, () => {
  console.log(`[ms-1]: Server is running at http://localhost:${port}`);
});
