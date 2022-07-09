import axios from 'axios';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const gwPort = 4003;

const ms1Port = 5006;
const ms1Url = `http://localhost:${ms1Port}`;

app.get('/', async (req: Request, res: Response) => {
  console.log('[gw] get / called')
  const ms1Res = await axios.get(`${ms1Url}/`);
  console.log('[gw] ms-1 response:', ms1Res.data);
  res.send(ms1Res.data);
});

app.listen(gwPort, () => {
  console.log(`[gw]: Server is running at http://localhost:${gwPort}`);
});
