import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5006;

app.get('/something/:id', (req: Request, res: Response) => {
  console.log('[ms-1] get /something/:id called with id', req.params.id)
  res.send({ somethingName: `Hi from ms-1, called with id: ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`[ms-1]: Server is running at http://localhost:${port}`);
});
