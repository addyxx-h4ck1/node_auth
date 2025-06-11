const express = require('express');
const routes = require('./routes/route');
const oauthRoutes = require('./routes/oauth');
const requestsLogger = require('./middleware/requestLogger');
const { config } = require('dotenv');
config();

const app = express();
app.use(requestsLogger);
app.use(express.json({}));

app.use('/', routes);
app.use('/oauth', oauthRoutes);

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
