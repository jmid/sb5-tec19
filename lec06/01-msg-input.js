/* eslint-env es6, node */
/* eslint no-console: 0 */

let latest = { time: Date.now(), msg: "no messages yet"};

process.stdin.on('data', data => {
    latest = { time: Date.now(), msg: data.toString() };
    process.stdout.write("new message at " + latest.time
                         + ": " + latest.msg)});