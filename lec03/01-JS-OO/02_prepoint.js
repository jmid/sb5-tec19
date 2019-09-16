/* eslint-env es6, shared-node-browser */
/* eslint no-console: 0 */
function Point(x,y) {
    this.x = x;
    this.y = y;
}

Point.prototype.move = function(dx, dy) {
    this.x = this.x + dx;
    this.y = this.y + dy;
}

let p = new Point(1,2);
console.log(p);
p.move(-1,3);
console.log(p);
