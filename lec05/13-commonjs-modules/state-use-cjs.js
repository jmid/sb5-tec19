/* eslint-env es6, node */
/* eslint no-console: 0 */

const scjs = require('./statecjs');

console.log(scjs.getState());
scjs.setState(1);
console.log(scjs.getState());
scjs.setState(2);
console.log(scjs.getState());