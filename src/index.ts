import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({ result: 'Hello World!' }));

app.listen(port, () => console.log(`server listening on port ${port}`));

export default app;
