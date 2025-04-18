const express = require('express');
const config = require('./config');
const numberRoutes = require('./routes/numberRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/numbers', numberRoutes);

app.use(errorHandler);

const { port, host } = config.server;
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log(`Window size configured to: ${config.window.size}`);
});
