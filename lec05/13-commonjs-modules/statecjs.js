/* eslint-env es6, browser */
/* eslint no-console: 0 */
/* eslint-parser sourceType: module */

let innerState = undefined;
exports.setState = newState => { innerState = newState; }
exports.getState = () => { return innerState; }

//exports default {setState, getState}