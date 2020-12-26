import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log('server running');
})