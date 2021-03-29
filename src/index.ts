import * as express from 'express';
import logger from './logger';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

app.listen(port, () => logger.info(`server listening on port ${port}`));

export default app;
