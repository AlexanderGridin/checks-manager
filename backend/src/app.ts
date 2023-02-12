import express from 'express';
import { connect } from './db/connect';
import { routes } from './routes/routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(1234, async () => {
  await connect();
  console.log('Server is running!');

  routes(app);
});
