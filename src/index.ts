import * as express from 'express';
import config from './config';

import logger from './logger';

const app = express();
const { port } = config.app;

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

app.listen(port, () => logger.info(`server listening on port ${port}`));

export default app;
