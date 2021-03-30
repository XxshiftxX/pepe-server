import * as express from 'express';
import * as mongoose from 'mongoose';
import config from './config';

import logger from './logger';
import { router as testRouter } from './test/router';

const app = express();
const { port } = config.app;

app.use(express.json());

app.use('/tests', testRouter);

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

mongoose.connect(config.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => logger.info(`server listening on port ${port}`));

export default app;
