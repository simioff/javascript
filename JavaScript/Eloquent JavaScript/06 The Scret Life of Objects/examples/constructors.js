function Rabbit(type) {
	this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');
console.log(blackRabbit.type);

// add a 'speak' method to rabbit created with the Rabbit constructor
Rabbit.prototype.speak = function(line) {
	console.log('The ' + this.type + 
		' rabbit says \'' + line + '\'');
};

blackRabbit.speak('Dooom...');
killerRabbit.speak('Killl...');