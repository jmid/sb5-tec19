/* eslint-env es6, node */
/* eslint no-console: 0 */

const state = (function () {
    let innerState = undefined;
    function setState(newState) { innerState = newState; }
    function getState() { return innerState; }
    return {setState, getState};
})();

