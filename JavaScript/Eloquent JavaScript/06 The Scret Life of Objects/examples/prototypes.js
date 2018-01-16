var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
// -> true
console.log(Object.getPrototypeOf(Object.prototype));
// -> null

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> true

var protoRabbit = {
	speak: function(line) {
		console.log('The ' + this.type + 
		' rabbit says \'' + line + '\'');
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('Killll!!!!');
