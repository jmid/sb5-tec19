/* eslint-env es6, node */
/* eslint no-console: 0 */

const express = require('express');

const server = express();
server.get('/', (req, res) => res.send('Hello World!'));
server.listen(8080);