import express, { Express, Request, Response } from 'express';
import { appRouter, createContext } from 'ms-1';

const app: Express = express();
const gwPort = 4003;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next()
})

app.get('/something/:id', async (req: Request, res: Response) => {
  console.log('[gw] get /something/:id called with id', req.params.id)
  const trpcRes = await appRouter.createCaller(createContext).query('getSomethingById', Number(req.params.id))
  console.log('[gw] ms-1 response:', trpcRes);
  res.send(trpcRes);
});

app.listen(gwPort, () => {
  console.log(`[gw]: Server is running at http://localhost:${gwPort}`);
});
