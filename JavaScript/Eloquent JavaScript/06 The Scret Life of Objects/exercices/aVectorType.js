function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vector) {
	return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
	return new Vector(this.x - vector.x, this.y - vector.y);
}

Object.defineProperty(Vector.prototype, 'length', {
	get: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
});

var a = new Vector(2,3);
var b = new Vector(-5,0);

console.log(a.plus(b));
console.log(a.minus(b));
console.log(a.length);