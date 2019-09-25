require('newrelic');

const express = require('express');

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');

const start = require("./../start");

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.status(200).send(start.start());
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});