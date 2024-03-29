/* eslint-env es6, node */
/* eslint no-console: 0 */

const express = require('express');
const server = express();

let db = [{ id: 0, name: "Jens Hansen" },
          { id: 1, name: "Hanne Jensen" },
          { id: 2, name: "Will Williamson"}];

server.get('/users/', (req, res) => res.json(db));
server.get('/users/:id', (req, res) => { 
    console.log(req.params); 
    if (req.params.id in db) {
        res.json(db[req.params.id]); 
    } else {
        res.sendStatus(404); 
    }});
server.listen(8080);