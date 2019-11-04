/* eslint-env es6, node */
/* eslint no-console: 0 */

const express = require('express');
const server = express();

let db = { 0: [ "Cucumber", "Carrots", "Lettuce" ],
           1: [ "Hammer", "Nails", "Wood", "Saw" ],
           2: [] };

server.get('/list', (req, res) => {
    let keys = [];
    for (let id in db) keys.push(id);
    res.json(keys);
})
server.get('/list/:identifier', (req, res) => { 
    console.log("GET", req.params); 
    let id = Number(req.params.identifier); 
    if (id in db) {
        res.json(db[id]); 
    } else {
        res.sendStatus(404); 
    }});
server.post('/list/:identifier/:item', (req, res) => { 
    console.log("POST", req.params); 
    let id = Number(req.params.identifier); 
    let item = req.params.item;
    if (id in db) {
        db[id].push(item);
        res.sendStatus(200);
    } else {
        res.sendStatus(404); 
    }});
server.delete('/list/:identifier/:item', (req, res) => { 
    console.log("DELETE", req.params); 
    let id = Number(req.params.identifier); 
    let item = req.params.item;
    if (id in db) {
        let pos = db[id].indexOf(item);
        if (pos >= 0) {
            db[id].splice(pos,1);
            res.sendStatus(200);
            return;
        }}
    res.sendStatus(404); 
    });
server.listen(8080);