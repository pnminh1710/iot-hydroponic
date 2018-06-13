const express = require('express');

const app = express();

const temperatureAPI = require('./api/sensor/temperature');

app.use('/api/temperature', temperatureAPI);

module.exports = app;
