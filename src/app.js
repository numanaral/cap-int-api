const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const cors = require('cors');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.set('json spaces', '\t');
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json({ message: 'Halo 👋' }));

app.use(middlewares.checkApiKey);
// app.use(middlewares.checkRequiredHeaders);
// app.use(middlewares.handleCors);
app.use(middlewares.triggerRandomDelayOrError);

app.use('/api', api);

app.use(middlewares.handleNotFound);
app.use(middlewares.handleErrors);

module.exports = app;
