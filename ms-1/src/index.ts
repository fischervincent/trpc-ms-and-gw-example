import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5006;

app.get('/', (req: Request, res: Response) => {
  console.log('[ms-1] get / called')
  res.send('Hi from ms-1');
});

app.listen(port, () => {
  console.log(`[ms-1]: Server is running at http://localhost:${port}`);
});
