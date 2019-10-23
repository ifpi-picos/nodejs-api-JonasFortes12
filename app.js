const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/');
const mongo = require('./config/mongoodb');

const app = express();
app.use(bodyParser.json());
app.use('/', routers);
mongo();

app.listen(3000, () => console.log('App Online...'));