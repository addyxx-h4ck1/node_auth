const express = require('express');
const routes = require('./routes/route');
const requestsLogger = require('./middleware/requestLogger');

const app = express();
app.use(requestsLogger);
app.use(express.json({}));

app.use('/', routes);

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
