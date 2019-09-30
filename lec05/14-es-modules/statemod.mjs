/* eslint-env es6, browser */
/* eslint no-console: 0 */
/* eslint-parser sourceType: module */

let innerState = undefined;
export function setState(newState) { innerState = newState; }
export function getState() { return innerState; }

export default {setState, getState}