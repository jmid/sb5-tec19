/* eslint-env es6, node */
/* eslint no-console: 0 */

//From https://flaviocopes.com/express-https-self-signed-certificate/
const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello HTTPS!')
})

let server = https.createServer({
    key:  fs.readFileSync('private.key'),
    cert: fs.readFileSync('public.cert')
  }, app);
server.listen(3000, () => console.log('Listening...'))
