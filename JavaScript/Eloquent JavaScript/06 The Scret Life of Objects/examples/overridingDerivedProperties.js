function Rabbit(type) {
	this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');

// add a 'speak' method to rabbit created with the Rabbit constructor
Rabbit.prototype.speak = function(line) {
	console.log('The ' + this.type + 
		' rabbit says \'' + line + '\'');
};

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);


console.log(Array.prototype.toString == Object.prototype.toString);
// -> false

console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));
