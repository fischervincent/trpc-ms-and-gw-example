import express, { Express } from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import { gwRouter, createContext } from './trpc';

const app: Express = express();
const gwPort = 4003;


app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: gwRouter,
    createContext,
  })
);

app.listen(gwPort, () => {
  console.log(`[gw]: Server is running at http://localhost:${gwPort}`);
});
