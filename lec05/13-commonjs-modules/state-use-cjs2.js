/* eslint-env es6, node */
/* eslint no-console: 0 */

const {getState,setState} = require('./statecjs');

console.log(getState());
setState(1);
console.log(getState());
setState(2);
console.log(getState());