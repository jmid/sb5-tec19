/* eslint-env es6, node */
/* eslint no-console: 0 */

const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
});
server.listen(8080);