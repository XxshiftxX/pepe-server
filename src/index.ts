import 'reflect-metadata';

import * as express from 'express';
import { createConnection } from 'typeorm';

import config from './config';

import logger from './logger';
import { router as testRouter } from './test/router';

const app = express();
const { port } = config.app;

app.use(express.json());

app.use('/tests', testRouter);

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

createConnection();

app.listen(port, () => logger.info(`server listening on port ${port}`));

export default app;
