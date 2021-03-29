import * as express from 'express';
import * as mongoose from 'mongoose';
import config from './config';

import logger from './logger';

const app = express();
const { port } = config.app;

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

mongoose.connect(config.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => logger.info(`server listening on port ${port}`));

export default app;
