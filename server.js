require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const Knex = require('knex');
const uuid = require('uuid');
const { Model } = require('objection');

const knexConfig = require('./knexfile');
const utils = require('./services/utils');
const Firebase = require('./services/firebase');

const V1 = require('./routes/v1');

const knexConnection = Knex(knexConfig);
Model.knex(knexConnection);

const server = express();

// External Middlewares
server.use((req, res, next) => {
  req.id = uuid.v4();
  next();
});

morgan.token('id', req => req.id);

server.use(morgan('[:id] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms', {
  skip: req => req.originalUrl.startsWith('/docs'),
}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// Routes
server.get('/', (req, res) => {
  res.send('Node REST Api Service');
});

if (process.env.NODE_ENV === 'development') {
  server.use('/docs', express.static(path.resolve(__dirname, 'docs/views')));
}

server.use(Firebase.validateToken);
server.use('/v1', V1.routes());

// Server
const port = parseInt(process.env.PORT, 10) || 3000;
server.listen(port, () => utils.log(`Server running on port ${port}`));

module.exports = server;
